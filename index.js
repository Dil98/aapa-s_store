const express  = require('express');
const app = express()

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/home',(req, res) => {
  res.render('/views/home')
})
// Update 2
app.listen(4000)