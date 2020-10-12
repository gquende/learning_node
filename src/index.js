const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());//Para ele entender as requisicoes em JSON
app.use(bodyParser.urlencoded({ extended: false }))//Para conseguir codificar as requisicoes por meio da URL



//Teste de uma requisicao
app.get('/', (req, res) => {


    res.send('Estou funcionando corretamente!!!!');
});


app.listen(3400);