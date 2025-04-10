const express = require('express');
const { phoneNumberFetch, createSignUp } = require('../controllers/auth');
const router = express.Router();

router.post('/phone-number-fetch', phoneNumberFetch);

router.post('/create-sign-up', createSignUp)



module.exports = router;
