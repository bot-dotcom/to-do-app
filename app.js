// Load modules
const express = require('express');
const path = require('path');
const taskRoutes = require('./routes/taskRoutes');

// Create express application
app = express();

// Listen on port 8080 for connections
app.listen(8080, () => {
  console.log(`Server started and listening at http://localhost:8080`)
});

// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Application routes
app.use(taskRoutes);
