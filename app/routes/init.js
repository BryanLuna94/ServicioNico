const config = require('../../config');

// Cargar enrutamiento
const routeIndex = require('./index');

const routeAutenticacion = require('./autenticacion');

module.exports = (app) => {
    app.use('/', routeIndex);
    app.use(config.app.endpoint.autenticacion, routeAutenticacion);
};