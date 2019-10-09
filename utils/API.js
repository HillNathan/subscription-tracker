// Conenct to DB
const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/loginapp');
const db = mongoose.connection;

module.exports = {

    getUserByUsername: (username, callback) => {
        var query = {username: username};
        db.User.findOne(query, callback);
    },

    getUserById: (id, callback) => {
        db.User.findById(id, callback);
    },

    comparePassword: (candidatePassword, hash, callback) => {
        bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
          if(err) throw err;
          callback(null, isMatch);
        });
    },

    getExpressBackend: () => {
        return ({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
    }

}