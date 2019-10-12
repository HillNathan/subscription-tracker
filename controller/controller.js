var mongojs = require("mongojs");
const db = require("../models")
// const User = require("../models/User")

const Controller = {

    getUser: (id, callback) => {
        db.User.findOne({ _id: mongojs.ObjectId(id)})
        .populate("subscriptions")
        .then(theUser => callback(theUser) );
    },

    addSubscription: (userId, newSub, callback) => {
        db.Subscription.create(newSub)
        .then(response => {
            db.User.findOneAndUpdate({ _id: mongojs.ObjectId(userId)}, 
            { $push: { subscriptions: response._id }}, 
            { new: true })
            .then(theUser => callback(theUser) );
        })
    },

    removeSubscription: (userId, subId, callback) => {
        db.User.findOneAndUpdate({ _id: mongojs.ObjectId(userId)}, 
            { $pull: { subscriptions: mongojs.ObjectId(subId)}}, 
            { new: true })
        .then(theUser => callback(theUser) );
    }

};

module.exports = Controller;
