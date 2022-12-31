const express  = require('express');
const session = require('express-session');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session(require('./config/session')));

app.use('/', require('./routes/home'));
app.use('/admin', require('./routes/login'));
app.use('/admin/logout', require('./routes/logout'));
app.use('/admin/tools', require('./routes/admin'));
app.use('*', require('./routes/error')); // Make sure this route is always at the end

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});