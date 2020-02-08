const express = require('express');
const routes = require('./routes');
const app = express();

app.get('/', (request, response) => {
  response.status(200).send('HELLO');
});

app.get('*', (request, response) => {
  response.status(404).send('404 NOT FOUND');
});

app.listen(4000, () => {
  console.log('Running on port 4000');
});
