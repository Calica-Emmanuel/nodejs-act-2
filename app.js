const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fundsRoutes = require('./routes/funds');


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/funds', fundsRoutes);

app.get('/', (req, res) => {
  res.render('index', { title: 'Barangay Funds Management' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
