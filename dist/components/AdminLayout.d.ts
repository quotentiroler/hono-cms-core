import type { FC, PropsWithChildren } from "hono/jsx";
export type AdminNavLink = {
    href: string;
    label: string;
    icon?: string;
};
export type AdminNavSection = {
    title: string;
    links: AdminNavLink[];
};
export declare const DEFAULT_ADMIN_NAV: AdminNavSection[];
export declare const ADMIN_ICONS: {
    dashboard: string;
    pages: string;
    projects: string;
    articles: string;
    team: string;
    images: string;
    messages: string;
    settings: string;
};
type Props = PropsWithChildren<{
    title?: string;
    username?: string;
    nav?: AdminNavSection[];
    brand?: {
        name?: string;
        logo?: string;
    };
}>;
export declare const AdminLayout: FC<Props>;
export {};
//# sourceMappingURL=AdminLayout.d.ts.map