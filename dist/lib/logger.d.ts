export declare const logger: {
    info(context: string, message: string, ...args: unknown[]): void;
    warn(context: string, message: string, ...args: unknown[]): void;
    error(context: string, message: string, ...args: unknown[]): void;
    /** Log an HTTP request error with method and path context */
    requestError(method: string, path: string, err: Error): void;
};
//# sourceMappingURL=logger.d.ts.map