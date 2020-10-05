const mongoose = require('../database');
//const dcrypt = require('bcryptjs');


//Serve para definir os campos (tabelas em sql) da Base de Dados
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },

    email: {

        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false //Serve quando for buscar os dados na BD esse registro na seja seleccionado
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }

});

const User = mongoose.model('User', UserSchema);
module.exports = User;