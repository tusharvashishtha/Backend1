const express = require('express');
const app = express();
const router = require('../src/Routes/index.routes')

app.use((req, res, next) => {
    console.log("This is the application level middleware");
    next()
})

app.use('/', router)

module.exports = app