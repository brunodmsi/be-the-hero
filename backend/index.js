const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ message: 'Hello Omnistack' }));

app.listen(8080, () => console.log('Rodando na porta 8080'));
