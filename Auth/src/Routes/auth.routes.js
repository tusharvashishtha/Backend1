const express = require('express');
const { signup, login } = require('../Controller/user.controller');
const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
// router.post('/user')
// router.post('/logout')

module.exports = router;