// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fundsRoutes = require('./routes/funds');

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/funds', fundsRoutes);

// Default Route
app.get('/', (req, res) => {
  res.render('index', { title: 'Barangay Funds Management' });
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
