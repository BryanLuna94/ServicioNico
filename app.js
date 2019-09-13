require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config');
const morganConfig = require('./app/common/morganConfig');
const app = express();
const dbInstanceManager = require('./app/dbObjectManager');
const swaggerDoc = require('./swaggerDoc');
const errorManager = require('./app/error/errorManager');
const routerInit = require('./app/routes/init');

swaggerDoc(app);

// Captura de logging (info + error)
morgan.token('params', morganConfig.tokenParams);
morgan.token('messageError', morganConfig.tokenMessageError);
morgan.token('stackError', morganConfig.tokenStackError);
morgan.token('body', morganConfig.tokenBody);
app.use(morgan(morganConfig.formatCustom, {
    skip: morganConfig.skipCustom,
    stream: { write: morganConfig.streamWriteCustom }
}));

// to support JSON-encoded bodies
app.use(bodyParser.json());
// to support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Carga de routes
routerInit(app);

// Manejo de errores
errorManager(app);

dbInstanceManager.fetchAllDbs()
    .then(() => {
        console.log('All connectionStrings were successful...');

        // Inicialización del servicio
        app.listen(config.app.port, () => {
            console.log('Server is up and running on port numner ' + config.app.port);
        });
    }, () => {
        console.log('Application not started because at least one connectionString was unsuccessful...');
    })
    .catch((error) => {
        console.log('Catch in promise all');
        console.log(error);
    });