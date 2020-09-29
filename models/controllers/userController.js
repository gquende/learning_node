const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

module.exports = {

    async insert(req, res) {
        const users = await Usuario.create(req.body);
        return res.json(uses);

    }

}