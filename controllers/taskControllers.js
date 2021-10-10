// Load modules
const taskModel = require('../models/taskModels');
const { validationResult } = require('express-validator');

// Index page controller
function indexPageGET (request, response) {
  taskModel.getTasks((queryResult) => {
    console.log(queryResult);
    response.render('index', { tasks: queryResult });
  });
};

// About page controller
function aboutPageGET (request, response) {
	response.render('about');
};

// Create task page controllers
// GET
function createPageGET (request, response) {
  response.render('create', { errors: {} });
};
// POST
function createPagePOST (request, response) {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.render('create', { errors: errors.mapped() });
  }
  const task = request.body.Task;
  const status = 'In progress';
  taskModel.createTask(task, status, (result) => {
    console.log(result);
    response.redirect('/');
  });
};

// Delete task page controllers
// GET
function deletePageGET (request, response) {
  const id = request.params.id;
  taskModel.getTask(id, (result) => {
    console.log(result);
    response.render('delete', { task: result });
  });
};
// POST
function deletePagePOST (request, response) {
  const id = request.params.id;
  taskModel.deleteTask(id, () => {
    response.redirect('/');
  });
};

// Update task page controllers
// GET
function updatePageGET (request, response) {
  const id = request.params.id;
  taskModel.getTask(id, (result) => {
    response.render('update', { task: result, errors: {} });
  });
};
// POST
function updatePagePOST (request, response) {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.render('update', { task: request.body, errors: errors.mapped() });
  }
  const task = request.body.Task;
  const status = request.body.Status;
  const id = request.params.id;
  taskModel.updateTask(task, status, id, () => {
    response.redirect('/');
  });
};

// Export controllers
module.exports = {
  indexPageGET,
  aboutPageGET,
  createPageGET,
  createPagePOST,
  deletePageGET,
  deletePagePOST,
  updatePageGET,
  updatePagePOST
};
