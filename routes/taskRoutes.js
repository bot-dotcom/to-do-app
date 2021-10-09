// Load modules
const express = require('express');
const taskController = require('../controllers/taskControllers');

//  Create route handler
const router = express.Router();

// GET Index Page
router.get('/', taskController.task_index);
// GET About Page
router.get('/about', taskController.task_about);
// GET/POST Create page
router.get('/task/create', taskController.task_create_get);
router.post('/task/create', taskController.task_create_post);
// GET/POST Delete Page
router.get('/task/delete/:id', taskController.task_delete_get);
router.post('/task/delete/:id', taskController.task_delete_post);
// GET/POST Update Page
router.get('/task/update/:id', taskController.task_update_get);
router.post('/task/update/:id', taskController.task_update_post);

// Export router
module.exports = router;