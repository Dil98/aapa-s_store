const express  = require('express');
const app = express()

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/home',(req, res) => {
  res.render('home');
});

app.get('/products',(req, res) => {
  res.render('products');
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});