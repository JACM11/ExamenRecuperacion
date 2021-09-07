const morgan = require('morgan');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const EncuestaRoute = require('./routes/encuesta');

const app = express();

app.set('port', 5000);

const URI = "mongodb+srv://admin:admin@cluster0.zk7c2.mongodb.net/examenRecuperacion?retryWrites=true&w=majority";

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/encuesta', EncuestaRoute);

app.listen(app.get('port'),()=>{
    console.log(`REST API on port ${app.get('port')}`);
})
