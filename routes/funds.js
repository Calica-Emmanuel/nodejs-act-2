// routes/funds.js
const express = require('express');
const router = express.Router();

// Dummy data for funds
let funds = [
  { id: 1, description: 'Community Project', amount: 5000 },
  { id: 2, description: 'Health Fund', amount: 3000 },
];

// List all funds
router.get('/', (req, res) => {
  res.render('funds', { title: 'Funds List', funds });
});

// Show form to add a new fund
router.get('/add', (req, res) => {
  res.render('form', { title: 'Add New Fund' });
});

// Add a new fund
router.post('/add', (req, res) => {
  const { description, amount } = req.body;
  const newFund = { id: funds.length + 1, description, amount: parseFloat(amount) };
  funds.push(newFund);
  res.redirect('/funds');
});

// Delete a fund
router.post('/delete/:id', (req, res) => {
  const { id } = req.params;
  funds = funds.filter(fund => fund.id !== parseInt(id));
  res.redirect('/funds');
});

module.exports = router;
