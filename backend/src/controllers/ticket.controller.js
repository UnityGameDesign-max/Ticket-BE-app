const db = require('@config/db');
const { sendResponse } = require('@utils/responseUtils');
const { STATUS_CODES, RESPONSE_MESSAGES } = require('@utils/statusCodes');

const getTickets = async (req, res) => {
    const { page = 1, filter = '' } = req.query;
    const limit = 10;
    const offset = (page - 1) * limit;
    try{
        const tickets = await db('tickets')
            .where('ticket_description', 'like', `%${filter}%`)
            .limit(limit)
            .offset(offset);
        res.status(STATUS_CODES.SUCCESS).json({ id });
        // sendResponse(res, STATUS_CODES.CREATED, id)
    }catch(err){
        sendResponse(res, STATUS_CODES.SERVER_ERROR, RESPONSE_MESSAGES.SERVER_ERROR);
    }
}

const createTicket = async (req, res) => {
    const { ticket_number, ticket_description } = req.body;
    try{
        const [id] = await db('tickets').insert({
            ticket_number,
            ticket_description,
            created_date: new Date()
        })
        sendResponse(res, STATUS_CODES.CREATED, id)
    }catch(err){
        sendResponse(res, STATUS_CODES.SERVER_ERROR, RESPONSE_MESSAGES.SERVER_ERROR);
    }
};

module.exports = { getTickets, createTicket }