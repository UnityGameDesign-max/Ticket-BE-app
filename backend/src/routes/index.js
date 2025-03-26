const express = require('express');
const userRoutes = require('./user.routes');
const ticketRoutes = require('./ticket.routes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/ticket', ticketRoutes);

module.exports = router;