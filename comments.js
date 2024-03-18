// Create web server and listen on port 3000
// Import the express module
const express = require('express');
// Create a new web server
const app = express();
// Import the comments module
const comments = require('./comments');
// Import body-parser module
const bodyParser = require('body-parser');
// Use the body-parser module to parse the request body
app.use(bodyParser.json());
// Create a new comment
app.post('/comments', (req, res) => {
  const { body } = req;
  if (body && body.author && body.message) {
    comments.push({
      id: comments.length + 1,





