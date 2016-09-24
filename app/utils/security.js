var crypto = require("crypto");

var encryptAlogrithms = {};

encryptAlogrithms.encryptByMD5 = function (input) {
    var encryptedData = "";
    var md5 = crypto.createHash('md5');
    encryptedData = md5.update(input).digest('hex');
    return encryptedData;
};

module.exports = encryptAlogrithms;
