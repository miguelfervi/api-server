const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(5000, () => {
    console.log('listening on port %s...', server.address().port);
});