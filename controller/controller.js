var mongojs = require("mongojs");
const User = require("../models/User")

const Controller = {

    addSubscription: (userId, newSub, callback) => {
        User.findOneAndUpdate({ _id: mongojs.ObjectId(userId)}, { $push: { subscriptions: newSub }}, { new: true })
        .then(theUser => callback(theUser) )
    },

    getUser: (id, callback) => {
        User.findOne({ _id: mongojs.ObjectId(id)})
        .then(theUser => {
            callback(theUser)
        })
    }

}

module.exports = Controller;
