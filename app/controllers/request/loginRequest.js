class loginRequest {
    constructor(
        usuario,
        clave
    ) {
        this.usuario = usuario;
        this.clave = clave;
    }
}

module.exports = loginRequest;