// Query functions
export async function getArticles(db) {
    const result = await db
        .prepare("SELECT * FROM articles WHERE is_active = 1 ORDER BY sort_order DESC, id DESC")
        .all();
    return result.results || [];
}
export async function getProjects(db) {
    const result = await db
        .prepare("SELECT * FROM projects WHERE is_active = 1 ORDER BY sort_order, id")
        .all();
    return result.results || [];
}
export async function getTeamMembers(db) {
    const result = await db
        .prepare("SELECT * FROM team_members WHERE is_active = 1 ORDER BY sort_order, id")
        .all();
    return result.results || [];
}
export async function getGalleries(db) {
    const result = await db
        .prepare("SELECT * FROM galleries WHERE is_active = 1 ORDER BY year DESC, sort_order, id DESC")
        .all();
    return result.results || [];
}
export async function getGallery(db, slug) {
    const gallery = await db.prepare("SELECT * FROM galleries WHERE slug = ?").bind(slug).first();
    if (!gallery)
        return null;
    const images = await db
        .prepare("SELECT * FROM gallery_images WHERE gallery_id = ? ORDER BY sort_order, id")
        .bind(gallery.id)
        .all();
    return { ...gallery, images: images.results || [] };
}
export async function getPage(db, slug) {
    return await db
        .prepare("SELECT * FROM pages WHERE slug = ?")
        .bind(slug)
        .first();
}
export async function getSiteSettings(db) {
    const result = await db.prepare("SELECT key, value FROM settings").all();
    const settings = {};
    for (const row of result.results || []) {
        settings[row.key] = row.value;
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
    };
}
//# sourceMappingURL=db.js.map