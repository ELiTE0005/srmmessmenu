// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors'); // Import cors

const app = express();
const port = 3000;
const dbFile = './visitors.db';

// Use cors middleware to allow requests from your front-end
app.use(cors());

// Connect to the SQLite database
const db = new sqlite3.Database(dbFile, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
    // Create the 'visitors' table if it doesn't exist
    db.run(`CREATE TABLE IF NOT EXISTS visitors (
      id INTEGER PRIMARY KEY,
      count INTEGER
    )`);
    // Insert initial count if the table is empty
    db.get('SELECT count FROM visitors WHERE id = 1', (err, row) => {
      if (err) {
        console.error(err.message);
      }
      if (!row) {
        db.run('INSERT INTO visitors (id, count) VALUES (1, 0)', (err) => {
          if (err) {
            console.error(err.message);
          }
          console.log('Initial visitor count set to 0.');
        });
      }
    });
  }
});

// Endpoint to get the current visitor count
app.get('/api/visitors', (req, res) => {
  db.get('SELECT count FROM visitors WHERE id = 1', (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ count: row.count });
  });
});

// Endpoint to increment the visitor count
app.post('/api/visitors/increment', (req, res) => {
  db.run('UPDATE visitors SET count = count + 1 WHERE id = 1', function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    console.log(`Visitor count incremented.`);
    res.json({ message: 'Count incremented successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


