const STATUS_CODES = {
    SUCCESS: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
};


const RESPONSE_MESSAGES = {
    TOKEN_REQUIRED: 'Token required',
    INVALID_TOKEN: 'Invalid Token',
    SERVER_ERROR: 'An unexpected error occurred',
};

module.exports = { STATUS_CODES, RESPONSE_MESSAGES };