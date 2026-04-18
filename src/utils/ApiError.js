class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.success = false;
        this.statusCode = statusCode;
    }
}

export default AppError;
