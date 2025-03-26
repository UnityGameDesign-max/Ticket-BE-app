const express = require('express');
const { getTickets, createTicket } = require('@controllers/ticket.controller');
const tokenMiddleware = require('@middlewares/authMiddleware');
const router = express.Router();

router.get('/', tokenMiddleware, getTickets);
router.post('/', tokenMiddleware, createTicket);

module.exports = router;