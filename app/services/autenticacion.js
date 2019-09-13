const { constantes } = require('../common/constantes');
const dbInstanceManager = require('../dbObjectManager');
const config = require('../../config');

function singIn(req, res){
    
    
}

const Login = async(loginRequest)=> {
    let resultado = '';
    const db = dbInstanceManager.getDb('PE');

    filterDb = {
        'Codigo': loginRequest.usuario,
        'Clave': loginRequest.clave
    };
    
    if (!!db) {
        let objUsuario = null;

        const usuario = db.collection('Usuario');
        objUsuario = await usuario.findOne(filterDb);
            
        if (objUsuario != null) {
            resultado = objUsuario;
        }
    } else {
        let mensaje = `error getting ${loginRequest.codigoPais} database`;
        throw new Error(mensaje);
    }

    return resultado;
};

module.exports = {
    Login
};