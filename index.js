const express  = require('express');
const app = express()

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/home',(req, res) => {
  res.render('/views/home');
})

app.listen(4000);