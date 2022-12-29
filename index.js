const express  = require('express');
const app = express()

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/',(req, res) => {
  res.render('home');
});

app.get('/search',(req, res) => {
  res.render('search');
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});