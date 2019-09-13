const autenticacionService = require('../services/autenticacion');
const loginRequest = require('./request/loginRequest');
const genericResponse = require('./response/genericResponse');

const Login = async(req, res, next) => {
    let parametros = new loginRequest(
        req.params.usuario,
        req.params.clave
    );

    req.params.usuario,
    req.params.clave
    
    let result;
    try {
        let docs = await autenticacionService.Login(parametros);
        result = new genericResponse(docs, 'OK', true);
        res.status(200).json(result);
    } catch (e) {
        next(e);
    }
};

module.exports = {
    Login,
};