const express = require('express');
const scrapper = require('./app/classes/scrapper');

const app = express();

const port = 3000;

require('./app/routes/')(app);

app.listen(port, () => {
  console.log("Server is live on "+port);
})