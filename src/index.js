const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Para entender quando enviar uma requisacao em JSON
app.use(bodyParser.json());

//Para entender quando passar os parametro via URL e ele conseguir decodar esses parametros
app.use(bodyParser.urlencoded({ extended: false }));

/*

//Rota de teste
app.get('/', (req, res) => {
    res.send('ok');
})*/

require('./controllers/authController')(app);//Passa o app para nao ter varias instancia de mesma aplicacao rodadndo
app.listen(3000);