import type { D1Database } from "@cloudflare/workers-types"
export type {
  Article,
  Project,
  TeamMember,
  Gallery,
  GalleryImage,
  GalleryWithImages,
  Page,
  SiteSettings,
} from "./schemas.js"
import type {
  Article,
  Project,
  TeamMember,
  Gallery,
  GalleryImage,
  GalleryWithImages,
  Page,
  SiteSettings,
} from "./schemas.js"

export type PageContent = Page

// Query functions
export async function getArticles(db: D1Database): Promise<Article[]> {
  const result = await db
    .prepare("SELECT * FROM articles WHERE is_active = 1 ORDER BY sort_order DESC, id DESC")
    .all<Article>()
  return result.results || []
}

export async function getProjects(db: D1Database): Promise<Project[]> {
  const result = await db
    .prepare("SELECT * FROM projects WHERE is_active = 1 ORDER BY sort_order, id")
    .all<Project>()
  return result.results || []
}

export async function getTeamMembers(db: D1Database): Promise<TeamMember[]> {
  const result = await db
    .prepare("SELECT * FROM team_members WHERE is_active = 1 ORDER BY sort_order, id")
    .all<TeamMember>()
  return result.results || []
}

export async function getGalleries(db: D1Database): Promise<Gallery[]> {
  const result = await db
    .prepare("SELECT * FROM galleries WHERE is_active = 1 ORDER BY year DESC, sort_order, id DESC")
    .all<Gallery>()
  return result.results || []
}

export async function getGallery(db: D1Database, slug: string): Promise<GalleryWithImages | null> {
  const gallery = await db.prepare("SELECT * FROM galleries WHERE slug = ?").bind(slug).first<Gallery>()
  if (!gallery) return null
  const images = await db
    .prepare("SELECT * FROM gallery_images WHERE gallery_id = ? ORDER BY sort_order, id")
    .bind(gallery.id)
    .all<GalleryImage>()
  return { ...gallery, images: images.results || [] }
}

export async function getPage(db: D1Database, slug: string): Promise<PageContent | null> {
  return await db
    .prepare("SELECT * FROM pages WHERE slug = ?")
    .bind(slug)
    .first<PageContent>()
}

export async function getSiteSettings(db: D1Database): Promise<SiteSettings> {
  const result = await db.prepare("SELECT key, value FROM settings").all<{ key: string; value: string }>()
  const settings: Record<string, string> = {}
  for (const row of result.results || []) {
    settings[row.key] = row.value
  }
  return {
    site_name: settings.site_name || "My Site",
    site_full_name: settings.site_full_name || "My Organization",
    address_street: settings.address_street || "",
    address_zip: settings.address_zip || "",
    address_city: settings.address_city || "",
    address_country: settings.address_country || "",
    phone: settings.phone || "",
    email: settings.email || "",
  }
}
