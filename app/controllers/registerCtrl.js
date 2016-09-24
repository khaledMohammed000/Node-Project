var registerCtrl = {};
var registerModel = require("../models/register.model");
var security = require("../utils/security");

registerCtrl.get = function (req, res) {
    res.render("home", {
        view: "register"
    });
    // getAllUsers(req, res);
};

registerCtrl.getlogin=function(req,res){
     res.render("login", 
         {
			title: 'Log-in Form',
			messages: req.flash('error') || req.flash('info')
		}
    );
}
registerCtrl.post = function (req, res) {
    console.log(req.body);
    createUser(req.body);
    res.render("home", {
        view: "login"
    });
};

registerCtrl.authenticate = function (req, res) {
    checkUser(req, res);
    //res.send("User Authenticated");
};

var getAllUsers = function (req, res) {
    registerModel.find({}, function (err, users) {
        if (err) {
            res.send("error occurred");
        } else {
            res.render("register", {
                users: users
            });
        }
        // docs.forEach 
    });
};
var createUser = function (user) {
    var user = new registerModel(user);
    user.save(function (err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);
        }
    });
};

var checkUser = function (req, res) {
    var login = req.body;
    login.password = security.encryptByMD5(login.password);
    registerModel.findOne({
        username: login.username,
        password: login.password
    }, function (err, user) {
        if (err) {
            res.send("error occurred");
        } else {
            if (user) {
                res.render("home", {
                    user: user
                });
            } else {
                res.end("User doesnot exit");
            }
        };
        // docs.forEach 
    });
};

module.exports = registerCtrl;
