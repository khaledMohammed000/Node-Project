var	passport = require('passport');
module.exports = function (app) {
    var ctrl = require("../controllers/registerCtrl");
    app.get("/register", ctrl.get);
    app.post("/register", ctrl.post);
    app.get("/login",ctrl.getlogin);
    app.post("/login",passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/login',
			failureFlash: true
		}));

}
