const express = require('express');
const morgan = require('morgan');
const path = require ('path');
const EncuestaRuote = require('./routes/encuesta')

const app = express();

app.set('port', 9000);

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));

app.use(EncuestaRuote);

app.listen(app.get('port'),()=>{
    console.log(`SSR on port ${app.get('port')}`);
})