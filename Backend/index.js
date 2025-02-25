const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

// Import route files
const gemini_routes = require('./routes/gemini-routes');

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the routes
app.use('/api', gemini_routes)

// Start the server
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
