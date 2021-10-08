// Load modules
const express = require('express');
const taskController = require('../controllers/taskControllers');

//  Create route handler
const router = express.Router();

// GET Index Page
router.get('/', taskController.task_index);
// GET/POST Create page
router.get('/task/create', taskController.task_create_get);
router.post('/task/create', taskController.task_create_post);

// Export router
module.exports = router;