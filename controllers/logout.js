const loggedInUser = require('../misc/loggedIn');

const getLogoutController = (req, res) => {
    loggedInUser.delete(req.sessionID);
    console.log("Appa has been logged out!");
    res.redirect('/admin');
}

module.exports = {getLogoutController}