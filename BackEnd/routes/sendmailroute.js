const express = require('express');
// import projects from '../controllers/controller';
const sendmail = require('../controllers/sendmail');
const router = express.Router();

router.post('/sendmail', sendmail);

module.exports = router;
