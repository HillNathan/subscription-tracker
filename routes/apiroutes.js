const middleware = require("../middleware");
const passport = middleware.passport;
const User = require("../models/User")
const API = require("../controller");

module.exports = app => {

  // create a GET route
  app.get("/express_backend", (req, res) => {
    res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
  });

  // Endpoint to login
  app.post("/login",
    passport.authenticate("local"), (req, res) => {
      res.send(req.user);
    }
  );

  app.get("/logout", (req, res) => {
    req.logout();
    res.send({ result: "success" })
  });

// Register User
  app.post("/register", (req, res) => {
    var password = req.body.password;
    var password2 = req.body.password2;

    if (password == password2){
      var newUser = new User({
        name: req.body.name,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        income: req.body.income,
        username: req.body.username,
        password: req.body.password
      });

      User.createUser(newUser, (err, user) => {
        if(err) console.log(err);
        res.send(user).end();
      });
    } else{
      res.status(500).send("{ errors: \"Passwords don't match\" }").end()
    }
  });

  // Endpoint to get current user
  app.get("/api/getuser", (req, res) => {
    if (!req.user) return res.json({ result: "no user" })
    try {
        API.controller.getUser(req.user._id, response => {
          return res.json(response)
      })
    }
    catch(err) {
      console.log("======== ERROR ==========")
      console.log(err)
    }
  });

  app.post("/api/addsub", (req, res) => {
    API.controller.addSubscription(req.user._id, req.body, response => {
      res.json(response);
    })
  });

  app.post("/api/removesub", (req, res) => {
    API.controller.removeSubscription(req.user._id, req.body.id, response => {
      res.json(response);
    })
  })

}
  


