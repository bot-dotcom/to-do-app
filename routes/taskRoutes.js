// Load modules
const express = require('express');
const taskController = require('../controllers/taskControllers');

//  Create route handler
const router = express.Router();

// GET Index Page
router.get('/', taskController.task_index);

// Export router
module.exports = router;