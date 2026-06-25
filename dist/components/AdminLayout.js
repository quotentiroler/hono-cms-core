/**
 * The admin shell now lives in the shared org kit. The previous local implementation moved
 * into @max-network/hono-ui/admin as a configurable superset whose API is a strict superset of
 * the one this module used to expose (`AdminLayout`, `AdminNavSection`/`AdminNavLink`,
 * `DEFAULT_ADMIN_NAV`, `ADMIN_ICONS`) — `nav`/`links`/`icon`-as-string/`brand` all still work —
 * so consumers are unaffected. Re-exported here to preserve the `hono-cms-core/components/AdminLayout`
 * import path.
 */
export * from "@max-network/hono-ui/admin";
//# sourceMappingURL=AdminLayout.js.map