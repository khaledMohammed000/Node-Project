var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    security = require("../utils/security");

var UserDetails = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    phoneNumber: Number,
    password: String,
    SSN: String,
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

UserDetails.methods.authenticate = function(password) {
	var md5 = crypto.createHash('md5');
	md5 = md5.update(password).digest('hex');

	return this.password === md5;
};

UserDetails.pre('save', function (next) {
    if (this.password) {
        this.password = security.encryptByMD5(this.password);
        console.log(this.password);
    }
    if (this.SSN && this.SSN.length == 10) {
        this.SSN == security.encryptByMD5(this.SSN);
    }
    next();
});
var model = mongoose.model('UserDetails', UserDetails);

module.exports = model;
