const loggedIn = require('../misc/loggedIn');

const homeController = async (req, res) => {
    res.render('home', {loggedIn: loggedIn.get(req.sessionID)});
}

module.exports = {homeController}