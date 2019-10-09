// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next();
  } else if (process.env.NODE_ENV === "test") {
    // we also want to allow access to routes for testing, so if the test environment is in effect allow access
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  return res.redirect("/");
};
