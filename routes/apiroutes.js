// const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = app => {

  // create a GET route
  app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });

}
  


