const loggedInUser = require('../misc/loggedIn');
const {adminUsername, adminPassword} = require('../config/admin');

const getLoginController = (req, res) => {
    res.render('login', {loggedIn: loggedInUser.get(req.sessionID)});
}

const postLoginController = (req, res) => { // TODO: Upon successful login, redirect the user to admin tools page
    const {username, password} = req.body;
    if(!loggedInUser.get(req.sessionID)) {
        if(username.toLowerCase() === adminUsername && password === adminPassword) {
            console.log("Appa logged in!");
            loggedInUser.set(req.sessionID, true);
        } else {
            console.log("Wrong username or password!");
        }
    } else {
        console.log("Already logged in!");
    }
    
    res.redirect('/admin');
}

module.exports = {getLoginController, postLoginController}