import { z } from "zod";
// ─── Form Data Coercion Helpers ──────────────────────────
// parseBody() returns { [key]: string | File }. These helpers
// coerce raw form values into the correct types.
// NOTE: `.optional()` makes the object KEY omittable. In Zod 4 `z.unknown()` no
// longer marks keys optional (it did in v3), so without this an omitted form field
// (e.g. an unchecked checkbox or a blank optional input) fails with "nonoptional".
const str = z.unknown().optional().transform((v) => (v == null ? "" : String(v)));
const strRequired = str.pipe(z.string().min(1));
const strOptional = str.pipe(z.string().transform((v) => v || null));
const year = z
    .unknown()
    .optional()
    .transform((v) => {
    if (v == null || v === "")
        return null;
    const n = parseInt(String(v));
    return isNaN(n) ? null : n;
})
    .pipe(z.number().int().min(1900).max(2100).nullable());
const checkbox = z.unknown().optional().transform((v) => (v ? 1 : 0));
const intDefault = (def) => z.unknown().optional().transform((v) => {
    if (v == null || v === "")
        return def;
    const n = parseInt(String(v));
    return isNaN(n) ? def : n;
});
// ─── Form Input Schemas ──────────────────────────────────
export const articleFormSchema = z.object({
    title: strRequired,
    slug: strOptional,
    content: strOptional,
    excerpt: strOptional,
    author: strOptional,
    image: strOptional,
    published_at: strOptional,
    sort_order: intDefault(0),
    is_active: checkbox,
});
export const projectFormSchema = z.object({
    title: strRequired,
    description: str,
    year: year,
    year_end: year,
    image: strOptional,
    is_active: checkbox,
});
export const teamMemberFormSchema = z.object({
    name: strRequired,
    role: strOptional,
    bio: strOptional,
    email: strOptional,
    image: strOptional,
    sort_order: intDefault(0),
    is_active: checkbox,
});
export const contactFormSchema = z.object({
    name: strRequired,
    email: strRequired.pipe(z.string().email()),
    subject: strOptional,
    message: strRequired,
});
export const loginFormSchema = z.object({
    username: strRequired,
    password: strRequired,
});
export const setupFormSchema = z
    .object({
    username: str.pipe(z.string().min(3)),
    password: str.pipe(z.string().min(8)),
    password_confirm: str.pipe(z.string().min(8)),
})
    .refine((d) => d.password === d.password_confirm, {
    message: "Passwords don't match",
    path: ["password_confirm"],
});
export const resetPasswordFormSchema = z
    .object({
    token: strRequired,
    password: str.pipe(z.string().min(8)),
    password_confirm: str.pipe(z.string().min(8)),
})
    .refine((d) => d.password === d.password_confirm, {
    message: "Passwords don't match",
    path: ["password_confirm"],
});
export const changePasswordFormSchema = z
    .object({
    current_password: strRequired,
    new_password: str.pipe(z.string().min(8)),
    confirm_password: str.pipe(z.string().min(8)),
})
    .refine((d) => d.new_password === d.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
});
export const siteSettingsFormSchema = z.object({
    site_name: str,
    contact_email: str,
    contact_phone: str,
    contact_address: str,
    footer_text: str,
});
// ─── Page Content Form Schemas ───────────────────────────
export const homePageFormSchema = z.object({
    heroTitle: strOptional,
    heroSubtitle: strOptional,
    heroImage: strOptional,
    introText: strOptional,
    metaDescription: strOptional,
});
export const contentPageFormSchema = z.object({
    headerImage: strOptional,
    content: strOptional,
    metaDescription: strOptional,
});
export const contactPageFormSchema = z.object({
    headerImage: strOptional,
    metaDescription: strOptional,
});
// ─── DB Row Schemas ──────────────────────────────────────
export const articleRowSchema = z.object({
    id: z.number(),
    title: z.string(),
    slug: z.string().nullable(),
    content: z.string().nullable(),
    excerpt: z.string().nullable(),
    author: z.string().nullable(),
    image: z.string().nullable(),
    published_at: z.string().nullable(),
    sort_order: z.number(),
    is_active: z.number(),
});
export const projectRowSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    year: z.number().nullable(),
    year_end: z.number().nullable(),
    image: z.string().nullable(),
    sort_order: z.number(),
    is_active: z.number(),
});
export const teamMemberRowSchema = z.object({
    id: z.number(),
    name: z.string(),
    role: z.string().nullable(),
    bio: z.string().nullable(),
    email: z.string().nullable(),
    image: z.string().nullable(),
    sort_order: z.number(),
    is_active: z.number(),
});
export const pageRowSchema = z.object({
    id: z.number(),
    slug: z.string(),
    title: z.string(),
    content: z.string(),
    meta_description: z.string().nullable(),
    updated_at: z.string().optional(),
});
export const contactSubmissionRowSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    subject: z.string().nullable(),
    message: z.string(),
    is_read: z.number(),
});
export const siteSettingsRowSchema = z.object({
    site_name: z.string(),
    site_full_name: z.string(),
    address_street: z.string(),
    address_zip: z.string(),
    address_city: z.string(),
    address_country: z.string(),
    phone: z.string(),
    email: z.string(),
});
//# sourceMappingURL=schemas.js.map