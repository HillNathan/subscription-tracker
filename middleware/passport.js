var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var API = require("../utils")

passport.use(
    new LocalStrategy( (username, password, done) => {
    //   When a user tries to sign in this code runs
        API.getUserByUsername(username, (err,user) => {
            if (err) throw err;
            if (!user) {
                return done(null, false, {message: "Unknown username"});
            }
            API.comparePassword(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, {message: "Invalid password"});
                }
            });
        });
    })
);
  
  // In order to help keep authentication state across HTTP requests,
  // Sequelize needs to serialize and deserialize the user
  // Just consider this part boilerplate needed to make it all work
  passport.serializeUser( (user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser( (id, done) => {
    API.getUserById(id, (err, user) => {
      done(err, user);
    });
  });
  
  // Exporting our configured passport
  module.exports = passport;