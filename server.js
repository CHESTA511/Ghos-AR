const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files from current directory
app.use(express.static('./'));

// Serve Assets folder specifically
app.use('/Assets', express.static(path.join(__dirname, 'Assets')));

// Route for main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Ghost AR Server running on http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server');
});

// Handle server shutdown gracefully
process.on('SIGINT', () => {
  console.log('\nShutting down Ghost AR Server...');
  process.exit(0);
});