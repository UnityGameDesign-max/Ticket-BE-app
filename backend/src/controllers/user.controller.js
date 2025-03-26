const { sendResponse } = require('../utils/responseUtils');
const db = require('@config/db');
const { STATUS_CODES } = require('@utils/statusCodes');

const getAllUsers = async (req, res) => {
    try{
        const users = await db('users')
        res.status(STATUS_CODES.SUCCESS).json({  })
    }catch(error){
        sendResponse(res, STATUS_CODES.SERVER_ERROR, RESPONSE_MESSAGES.SERVER_ERROR);
    }
};

module.exports = { getAllUsers };