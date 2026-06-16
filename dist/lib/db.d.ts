import type { D1Database } from "@cloudflare/workers-types";
export type { Article, Project, TeamMember, Gallery, GalleryImage, GalleryWithImages, Page, SiteSettings, } from "./schemas.js";
import type { Article, Project, TeamMember, Gallery, GalleryWithImages, Page, SiteSettings } from "./schemas.js";
export type PageContent = Page;
export declare function getArticles(db: D1Database): Promise<Article[]>;
export declare function getProjects(db: D1Database): Promise<Project[]>;
export declare function getTeamMembers(db: D1Database): Promise<TeamMember[]>;
export declare function getGalleries(db: D1Database): Promise<Gallery[]>;
export declare function getGallery(db: D1Database, slug: string): Promise<GalleryWithImages | null>;
export declare function getPage(db: D1Database, slug: string): Promise<PageContent | null>;
export declare function getSiteSettings(db: D1Database): Promise<SiteSettings>;
//# sourceMappingURL=db.d.ts.map