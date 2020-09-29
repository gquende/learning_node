const mongoose = require('mongose');

const UserSchema = new mongoose.Schema({

    nome: {

        type: String,
        required: true,
        uppercase: true,
        minlength: 3,
        maxlength: 100
    },
    matriculas: {
        type: Number,
        required: true,
        min: 1,
        max: 9999,
        unique: true
    },
    ativo: {

        type: Boolean,
        deafualt: true,
        required: true
    },
    endereco: {
        cidade: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 100
        },

        estado: {

            type: String,
            require: true,
            minlength: 2,
            maxlength: 2
        }
    },

    registro: {
        type: Date,
        default: Date.now
    }

});

mongoose.model('Usuario', UserSchema);