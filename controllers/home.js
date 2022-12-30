const loggedIn = require('../misc/loggedIn');
const products = require('../misc/products');

const homeController = async (req, res) => {
    res.render('home', {loggedIn: loggedIn.get(req.sessionID), products: products});
}

module.exports = {homeController}