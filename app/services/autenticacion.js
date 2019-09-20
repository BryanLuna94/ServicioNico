const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../../config');


function crearToken (usuario){
    const payload = {
        sub: usuario._id,
        iat: moment().unix(),
        exp: moment().add(14,'days').unix()
    }

    jwt.encode(payload, config.constantes.claveToken)
    return resultado;
}

function decodeToken (token){
    const decoded = new Promise((resolve, reject) =>{
        try {
            const payload = jwt.decode(token, config.constantes.claveToken)
            if(payload.exp < moment().unix()){
                reject({
                    status: 401,
                    message: 'El token ha expirado'
                })
            }
            resolve(payload.sub)
        } catch (error) {
            reject({
                status: 500,
                message: 'Invalid Token'
            })
        }
    })

    return decoded
}

module.exports = {
    crearToken,
    decodeToken
}