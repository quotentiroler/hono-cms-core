import type { D1Database } from "@cloudflare/workers-types";
export declare function generateSessionId(): string;
export declare function hashPassword(password: string): Promise<string>;
export declare function verifyPassword(password: string, storedHash: string): Promise<boolean>;
export declare function createSession(db: D1Database, userId: number): Promise<string>;
export declare function validateSession(db: D1Database, sessionId: string): Promise<{
    userId: number;
    username: string;
} | null>;
export declare function deleteSession(db: D1Database, sessionId: string): Promise<void>;
export declare function cleanupExpiredSessions(db: D1Database): Promise<void>;
export declare function getSessionIdFromCookie(cookieHeader: string | undefined | null): string | null;
export declare function createSessionCookie(sessionId: string): string;
export declare function deleteSessionCookie(): string;
//# sourceMappingURL=auth.d.ts.map