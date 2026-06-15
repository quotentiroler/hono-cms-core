import { z } from "zod";
export declare const articleFormSchema: z.ZodObject<{
    title: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodString>;
    slug: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
    content: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
    excerpt: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
    author: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
    image: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
    published_at: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
    sort_order: z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<number, unknown>>;
    is_active: z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<0 | 1, unknown>>;
}, z.core.$strip>;
export declare const projectFormSchema: z.ZodObject<{
    title: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodString>;
    description: z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>;
    year: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<number | null, unknown>>, z.ZodNullable<z.ZodNumber>>;
    year_end: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<number | null, unknown>>, z.ZodNullable<z.ZodNumber>>;
    image: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
    is_active: z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<0 | 1, unknown>>;
}, z.core.$strip>;
export declare const teamMemberFormSchema: z.ZodObject<{
    name: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodString>;
    role: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
    bio: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
    email: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
    image: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
    sort_order: z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<number, unknown>>;
    is_active: z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<0 | 1, unknown>>;
}, z.core.$strip>;
export declare const contactFormSchema: z.ZodObject<{
    name: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodString>;
    email: z.ZodPipe<z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodString>, z.ZodString>;
    subject: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
    message: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodString>;
}, z.core.$strip>;
export declare const loginFormSchema: z.ZodObject<{
    username: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodString>;
    password: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodString>;
}, z.core.$strip>;
export declare const setupFormSchema: z.ZodObject<{
    username: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodString>;
    password: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodString>;
    password_confirm: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodString>;
}, z.core.$strip>;
export declare const resetPasswordFormSchema: z.ZodObject<{
    token: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodString>;
    password: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodString>;
    password_confirm: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodString>;
}, z.core.$strip>;
export declare const changePasswordFormSchema: z.ZodObject<{
    current_password: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodString>;
    new_password: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodString>;
    confirm_password: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodString>;
}, z.core.$strip>;
export declare const siteSettingsFormSchema: z.ZodObject<{
    site_name: z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>;
    contact_email: z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>;
    contact_phone: z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>;
    contact_address: z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>;
    footer_text: z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>;
}, z.core.$strip>;
export declare const homePageFormSchema: z.ZodObject<{
    heroTitle: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
    heroSubtitle: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
    heroImage: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
    introText: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
    metaDescription: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
}, z.core.$strip>;
export declare const contentPageFormSchema: z.ZodObject<{
    headerImage: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
    content: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
    metaDescription: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
}, z.core.$strip>;
export declare const contactPageFormSchema: z.ZodObject<{
    headerImage: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
    metaDescription: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodUnknown>, z.ZodTransform<string, unknown>>, z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
}, z.core.$strip>;
export declare const articleRowSchema: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    slug: z.ZodNullable<z.ZodString>;
    content: z.ZodNullable<z.ZodString>;
    excerpt: z.ZodNullable<z.ZodString>;
    author: z.ZodNullable<z.ZodString>;
    image: z.ZodNullable<z.ZodString>;
    published_at: z.ZodNullable<z.ZodString>;
    sort_order: z.ZodNumber;
    is_active: z.ZodNumber;
}, z.core.$strip>;
export declare const projectRowSchema: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    description: z.ZodString;
    year: z.ZodNullable<z.ZodNumber>;
    year_end: z.ZodNullable<z.ZodNumber>;
    image: z.ZodNullable<z.ZodString>;
    sort_order: z.ZodNumber;
    is_active: z.ZodNumber;
}, z.core.$strip>;
export declare const teamMemberRowSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    role: z.ZodNullable<z.ZodString>;
    bio: z.ZodNullable<z.ZodString>;
    email: z.ZodNullable<z.ZodString>;
    image: z.ZodNullable<z.ZodString>;
    sort_order: z.ZodNumber;
    is_active: z.ZodNumber;
}, z.core.$strip>;
export declare const pageRowSchema: z.ZodObject<{
    id: z.ZodNumber;
    slug: z.ZodString;
    title: z.ZodString;
    content: z.ZodString;
    meta_description: z.ZodNullable<z.ZodString>;
    updated_at: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const contactSubmissionRowSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    email: z.ZodString;
    subject: z.ZodNullable<z.ZodString>;
    message: z.ZodString;
    is_read: z.ZodNumber;
}, z.core.$strip>;
export declare const siteSettingsRowSchema: z.ZodObject<{
    site_name: z.ZodString;
    site_full_name: z.ZodString;
    address_street: z.ZodString;
    address_zip: z.ZodString;
    address_city: z.ZodString;
    address_country: z.ZodString;
    phone: z.ZodString;
    email: z.ZodString;
}, z.core.$strip>;
export type Article = z.infer<typeof articleRowSchema>;
export type Project = z.infer<typeof projectRowSchema>;
export type TeamMember = z.infer<typeof teamMemberRowSchema>;
export type Page = z.infer<typeof pageRowSchema>;
export type ContactSubmission = z.infer<typeof contactSubmissionRowSchema>;
export type SiteSettings = z.infer<typeof siteSettingsRowSchema>;
export type ArticleForm = z.infer<typeof articleFormSchema>;
export type ProjectForm = z.infer<typeof projectFormSchema>;
export type TeamMemberForm = z.infer<typeof teamMemberFormSchema>;
export type ContactForm = z.infer<typeof contactFormSchema>;
//# sourceMappingURL=schemas.d.ts.map