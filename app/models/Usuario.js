'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const UsuarioSchema = new Schema({
    Codigo: { type: String, unique: true },
    Clave: { type, String, select: false },
    Telefono: { type: String, unique: true },
    Nombres: String,
    Apellidos: String,
    FlagActivo: { type: Boolean, default: false },
    Foto: String,
    Correo: { type: String, unique: true, lowercase: true },
    FlagHabilitado: { type: Boolean, default: false },
    FechaCreacion: { type: Date, default: Date.now() },
    FechaRevision: Date
})

UsuarioSchema.pre('save', (next) => {
    let usuario = this
    if(!usuario.isModified('Clave')) return next()

    bcrypt.genSalt(10, (err, salt) =>{
        if (err) return next()

        bcrypt.hash(usuario.Clave, salt, null, (err, hash) =>{
            if (err) return next(err)
            
            usuario.Clave = hash
            next()
        })
    })
})

/*
UsuarioSchema.methods.gravatar = function(){
    if (!this.)
}*/

module.exports = mongoose.model('Usuario', UsuarioSchema)