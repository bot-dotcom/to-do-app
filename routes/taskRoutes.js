// Load modules
const express = require('express');

//  Create route handler
const router = express.Router();

// Respond when a GET request is made to the index page
router.get('/', (request, response) => {
  response.render('index');
});

// Export router
module.exports = router;