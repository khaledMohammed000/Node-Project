var homeController = {};

homeController.get = function (req, res) {
    res.render("home", {
        view: "about"
    });
};
homeController.post = function (req, res) {
    console.log(req.params);
    res.send("Form posted");
};
homeController.put = function (req, res) {

};
homeController.delete = function (req, res) {

};
module.exports = homeController;
