const loggedInUser = require('../misc/loggedIn');

const getLogoutController = (req, res) => {
    if(loggedInUser.get(req.sessionID)) {
        loggedInUser.delete(req.sessionID);
        console.log("Appa has been logged out!");
        res.redirect('/admin');
    } else {
        res.redirect('/error');
    }
    
}

module.exports = {getLogoutController}