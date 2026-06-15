import type { D1Database } from "@cloudflare/workers-types"

// Generate a random session ID
export function generateSessionId(): string {
  const array = new Uint8Array(32)
  crypto.getRandomValues(array)
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("")
}

// Hash password using SHA-256 with salt
export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16))
  const saltHex = Array.from(salt, (byte) => byte.toString(16).padStart(2, "0")).join("")

  const encoder = new TextEncoder()
  const data = encoder.encode(saltHex + password)
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((byte) => byte.toString(16).padStart(2, "0")).join("")

  return `${saltHex}:${hashHex}`
}

// Verify password against stored hash
export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  const [salt, hash] = storedHash.split(":")
  if (!salt || !hash) return false

  const encoder = new TextEncoder()
  const data = encoder.encode(salt + password)
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const computedHash = hashArray.map((byte) => byte.toString(16).padStart(2, "0")).join("")

  return computedHash === hash
}

// Session management
export async function createSession(db: D1Database, userId: number): Promise<string> {
  const sessionId = generateSessionId()
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days

  await db
    .prepare("INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)")
    .bind(sessionId, userId, expiresAt)
    .run()

  return sessionId
}

export async function validateSession(
  db: D1Database,
  sessionId: string
): Promise<{ userId: number; username: string } | null> {
  const result = await db
    .prepare(`
      SELECT s.user_id, u.username
      FROM sessions s
      JOIN admin_users u ON s.user_id = u.id
      WHERE s.id = ? AND s.expires_at > datetime('now')
    `)
    .bind(sessionId)
    .first<{ user_id: number; username: string }>()

  if (!result) return null
  return { userId: result.user_id, username: result.username }
}

export async function deleteSession(db: D1Database, sessionId: string): Promise<void> {
  await db.prepare("DELETE FROM sessions WHERE id = ?").bind(sessionId).run()
}

// Clean up expired sessions
export async function cleanupExpiredSessions(db: D1Database): Promise<void> {
  await db.prepare("DELETE FROM sessions WHERE expires_at < datetime('now')").run()
}

// Get session ID from cookie header
export function getSessionIdFromCookie(cookieHeader: string | undefined | null): string | null {
  if (!cookieHeader) return null

  const cookies = cookieHeader.split(";").map((c) => c.trim())
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=")
    if (name === "session") return value ?? null
  }
  return null
}

// Create session cookie
export function createSessionCookie(sessionId: string): string {
  return `session=${sessionId}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${7 * 24 * 60 * 60}`
}

// Delete session cookie
export function deleteSessionCookie(): string {
  return "session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0"
}
