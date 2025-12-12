const express = require('express');
const app = express();
const router  = require('./Routes/auth.routes');

app.use(express.json())
app.use('/auth', router)




module.exports = app;