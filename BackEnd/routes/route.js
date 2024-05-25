const express = require('express');
// import projects from '../controllers/controller';
const projects = require('../controllers/controller');
const router = express.Router();

router.get('/getProjects', projects.getProjects);
router.post('/createProjects', projects.createProjects);

module.exports = router;
