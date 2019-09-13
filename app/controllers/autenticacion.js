const autenticacionService = require('../services/autenticacion');
const loginRequest = require('./request/loginRequest');
const genericResponse = require('./response/genericResponse');
const Usuario = require('../models/Usuario')
const service = require('../services/autenticacion')

function sigIn(res, req){
    User.find({ 
        Codigo: req.body.Codigo,
        Clave: req.body.Clave
    }, (err, user) =>{
        if(err) return res.status(500).send({message: err})
        if(!user) return res.status(404).send({message: 'No existe el usuario'})
        
        req.Usuario = user
        res.status(200).send({
            message: 'Te has logeado correctamente',
            token: service.cre
        })
    })
}

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