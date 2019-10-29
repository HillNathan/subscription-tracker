const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

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
    firstname: {
        type: String,
    },
    lastname: {
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
    subscriptions: [
        {
            type: Schema.Types.ObjectId,
            ref: "Subscription"
        }
    ]
})

var User = module.exports = mongoose.model("User", UserSchema);

module.exports.createUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        newUser.password = hash;
        try {
            newUser.save(callback);
        }
        catch (err) {
           throw (err)
        }
      });
    });
  }
  
module.exports.getUserByUsername = (username, callback) => {
    var query = {username: username};
    User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
  }
  
module.exports.comparePassword = (candidatePassword, hash, callback) => {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}

