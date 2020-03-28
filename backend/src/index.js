const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errors());

app.listen(8080, () => console.log('Rodando na porta 8080'));
