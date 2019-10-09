const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcryptjs');

var UserSchema = new Schema ({
    username: {
        type: String,
        required: "Username is required."
    },
    password: {
        type: String,
        trim: true,
        required: "Password is required."
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    income: {
        type: Number
    },
    subscriptions: {
        type: Array
    }

})

var User = module.exports = mongoose.model("User", UserSchema);

module.exports.createUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(newUser.password, salt, function(err, hash) {
        newUser.password = hash;
        newUser.save(callback);
      });
    });
  }