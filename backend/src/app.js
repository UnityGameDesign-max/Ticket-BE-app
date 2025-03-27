require('module-alias/register');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes/index');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Ticketing API',
            version: '1.0.0',
            description: 'API Documentation for Ticketing System'
        }
    },
    apis: ["./routes/*.js"]
}

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', routes);

module.exports = app;