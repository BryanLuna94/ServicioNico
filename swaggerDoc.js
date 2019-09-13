const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    openapi: '3.0',
    swaggerDefinition: {
        info: {
            title: 'ServicioNico - Node.js',
            version: '1.0.0'
        },
        basePath: '/'
    },
    apis: ['./app/routes/*.js']
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));
};