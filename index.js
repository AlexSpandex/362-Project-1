const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// POST request to submit discussion post
app.post('/submit-discussion-post', (req, res) => {
  const { subject, question } = req.body;

  // Save subject and question to database or other storage

  // Return success message to frontend
  res.status(200).json({ message: 'Discussion post submitted successfully' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

