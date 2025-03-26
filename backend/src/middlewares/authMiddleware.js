const { sendResponse } = require("@utils/responseUtils");
const { STATUS_CODES, RESPONSE_MESSAGES } = require("@utils/statusCodes");

const tokenMiddleware = (req, res, next) => {
    const token = req.headers["authorization"];
    if(!token) return sendResponse(res, STATUS_CODES.FORBIDDEN, RESPONSE_MESSAGES.TOKEN_REQUIRED);
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) return sendResponse(res, STATUS_CODES.UNAUTHORIZED, RESPONSE_MESSAGES.INVALID_TOKEN);
        req.user = decoded;
        next();
    })
}

module.exports = tokenMiddleware;