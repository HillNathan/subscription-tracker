const middleware = require("../middleware");
const API = require("../utils")
const passport = middleware.passport;
// const isAuthenticated = middleware.isAuthenticated;

module.exports = app => {

  // create a GET route
  app.get('/express_backend', (req, res) => {
    var answer = API.getExpressBackend()
    res.send(answer);
  });

  app.post('/login',
    passport.authenticate('local'), (req, res) => {
      res.send(req.user);
    }
  );

  app.get('/logout', (req, res) => {
    req.logout();
    res.send(null)
  });

  // Endpoint to get current user
  app.get('/getuser', (req, res) => {
    res.send(req.user);
  });

  // Register User
  app.post('/register', (req, res) => {

    var newUser = new User({
      name: req.body.name,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      income: req.body.income
    });

    User.createUser(newUser, (err, user) => {
      if(err) throw err;
      res.send(user).end()
    });
  });

}
  


