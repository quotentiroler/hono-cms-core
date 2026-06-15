function formatMessage(level, context, message) {
    return `[${level.toUpperCase()}] [${context}] ${message}`;
}
export const logger = {
    info(context, message, ...args) {
        console.log(formatMessage("info", context, message), ...args);
    },
    warn(context, message, ...args) {
        console.warn(formatMessage("warn", context, message), ...args);
    },
    error(context, message, ...args) {
        console.error(formatMessage("error", context, message), ...args);
    },
    /** Log an HTTP request error with method and path context */
    requestError(method, path, err) {
        console.error(formatMessage("error", `${method} ${path}`, err.message), err.stack);
    },
};
//# sourceMappingURL=logger.js.map