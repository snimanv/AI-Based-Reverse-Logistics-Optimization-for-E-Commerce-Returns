// // server.js
// const express = require('express');
// const fs = require('fs');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const app = express();

// const CREDENTIALS_PATH = './auth/credentials.json';

// app.use(cors());
// app.use(bodyParser.json());

// // Handle Signup
// app.post('/signup', (req, res) => {
//   const { name, email, password } = req.body;

//   const user = { name, email, password };

//   // Save the credentials to a JSON file
//   fs.writeFile(CREDENTIALS_PATH, JSON.stringify(user), (err) => {
//     if (err) return res.status(500).json({ message: 'Error saving credentials' });

//     res.status(200).json({ message: 'Signup successful' });
//   });
// });

// // Handle Login
// app.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   fs.readFile(CREDENTIALS_PATH, 'utf8', (err, data) => {
//     if (err) return res.status(500).json({ message: 'Error reading credentials' });

//     const savedUser = JSON.parse(data);

//     if (savedUser.email === email && savedUser.password === password) {
//       res.status(200).json({ message: 'Login successful' });
//     } else {
//       res.status(401).json({ message: 'Invalid email or password' });
//     }
//   });
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });




// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');

// // import express from 'express';
// // import cors from 'cors';
// // import bodyParser from 'body-parser';
// // import fs from 'fs';
// // import path from 'path';

// const app = express();
// const PORT = 5000;

// const credentialsFilePath = path.join(__dirname, 'auth', 'credentials.json');

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Create `auth/credentials.json` if it doesn't exist
// if (!fs.existsSync(credentialsFilePath)) {
//   fs.mkdirSync(path.join(__dirname, 'auth'), { recursive: true });
//   fs.writeFileSync(credentialsFilePath, '[]', 'utf-8');
// }

// // Helper: Read and write users
// const readUsers = () => JSON.parse(fs.readFileSync(credentialsFilePath, 'utf-8'));
// const writeUsers = (users) => fs.writeFileSync(credentialsFilePath, JSON.stringify(users, null, 2));

// // POST /signup
// app.post('/signup', (req, res) => {
//   const { name, email, password } = req.body;
//   const users = readUsers();

//   // Check if email already exists
//   const exists = users.find((user) => user.email === email);
//   if (exists) {
//     return res.status(400).json({ message: 'Email already registered!' });
//   }

//   users.push({ name, email, password });
//   writeUsers(users);
//   return res.status(200).json({ message: 'Signup successful!' });
// });

// // POST /login
// app.post('/login', (req, res) => {
//   const { email, password } = req.body;
//   const users = readUsers();

//   const user = users.find((u) => u.email === email && u.password === password);
//   if (!user) {
//     return res.status(401).json({ message: 'Invalid email or password' });
//   }

//   return res.status(200).json({ message: 'Login successful!' });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });