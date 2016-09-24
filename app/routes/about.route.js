module.exports = function (app) {
    app.get("/about", function (req, res) {
        res.send("<h1>About</h1>")
    });
};
