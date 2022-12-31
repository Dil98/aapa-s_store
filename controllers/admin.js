const loggedInUser = require('../misc/loggedIn');
const products = require('../misc/products');
const getAdminController = (req, res) => {
    if(loggedInUser.get(req.sessionID)) {
        res.render('admin-tools');
    } else {
        res.redirect('/error');
    }
}

const postAddProductController = (req, res) => {
    if(loggedInUser.get(req.sessionID)) {

        const {title, image, description, uniqueName} = req.body;
        products.set(uniqueName, {img: image, description: description});

        res.redirect('/admin/tools');
    } else {
        res.redirect('/error');
    }
}

const postRemoveProductController = (req, res) => {
    if(loggedInUser.get(req.sessionID)) {

        const {uniqueName} = req.body;
        products.delete(uniqueName);

        res.redirect('/admin/tools');
    } else {
        res.redirect('/error');
    }
}

module.exports = {getAdminController, postAddProductController, postRemoveProductController}