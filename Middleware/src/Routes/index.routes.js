const express = require('express');
const { route } = require('../app');

const router = express.Router();

router.use((req, res, next) => {
    console.log("This is router level middleware");
    next();
})

router.get('/', (req, res) => {
    res.json({message : "Home page"});
    console.log("Router called")
})

module.exports = router