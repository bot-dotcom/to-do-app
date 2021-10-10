// Load modules
const express = require('express');
const taskController = require('../controllers/taskControllers');
const taskValidator = require('../validation/taskValidator');

//  Create route handler
const router = express.Router();

// GET Index Page
router.get('/', taskController.indexPageGET);
// GET About Page
router.get('/about', taskController.aboutPageGET);
// GET/POST Create page
router.get('/task/create', taskController.createPageGET);
router.post('/task/create', taskValidator.validateTask, taskController.createPagePOST);
// GET/POST Delete Page
router.get('/task/delete/:id', taskController.deletePageGET);
router.post('/task/delete/:id', taskController.deletePagePOST);
// GET/POST Update Page
router.get('/task/update/:id', taskController.updatePageGET);
router.post('/task/update/:id', taskValidator.validateTask, taskController.updatePagePOST);

// Export router
module.exports = router;

