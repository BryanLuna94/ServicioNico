const genericResponse = require('../controllers/response/genericResponse');

// Manejo de errores
let errorManager = (err, req, res, next) => {
    err.status = err.status || 500;

    res.locals.message = err.message;
    res.locals.stack = err.stack || err;
    res.locals.error = err;

    let rpta = new genericResponse(null, err.message, false);

    res.status(err.status);
    res.json(rpta);

    next();
};

module.exports = (app) => {
    app.use(errorManager);
};