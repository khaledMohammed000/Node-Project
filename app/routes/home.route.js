module.exports = function (app) {
    console.log("routes called");
    var ctrl = require("../controllers/homeCtrl");
    app.get("/", ctrl.get);
    app.post("/", ctrl.post)
        /*app.get("/home", function (req, res) {
            res.send("<h1>Home</h1>")
        });
        app.get("/", function (req, res) {
            res.send("<h1>Home</h1>")
        });*/
}
