const { sendResponse } = require('../utils/responseUtils');
const db = require('@config/db');
const { STATUS_CODES } = require('@utils/statusCodes');

const getAllUsers = async (req, res) => {
    try{
        const users = await db('users')
        res.status(STATUS_CODES.SUCCESS).json({ users })
    }catch(error){
        sendResponse(res, STATUS_CODES.SERVER_ERROR, RESPONSE_MESSAGES.SERVER_ERROR);
    }
};

const addUser = async (req, res) => {
    const { name, email, password } = req.body;
    try{
        const postUser = await db('users').insert({
            name,
            email,
            password
        })

        sendResponse(
            res,
            STATUS_CODES.CREATED,
        )
    }catch(err){
        sendResponse(
            res,
            STATUS_CODES.SERVER_ERROR,
            RESPONSE_MESSAGES.SERVER_ERROR
        );
    }
}

module.exports = { getAllUsers, addUser };