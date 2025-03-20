require('module-alias/register');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./');

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api', routes);

module.exports = app;