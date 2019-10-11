var mongojs = require("mongojs");
const User = require("../models/User")

const Controller = {

    getUser: (id, callback) => {
        User.findOne({ _id: mongojs.ObjectId(id)})
        .then(theUser => callback(theUser) );
    },

    addSubscription: (userId, newSub, callback) => {
        User.findOneAndUpdate({ _id: mongojs.ObjectId(userId)}, 
            { $push: { subscriptions: newSub }}, 
            { new: true })
        .then(theUser => callback(theUser) );
    },

    removeSubscription: (userId, subName, callback) => {
        User.findOneAndUpdate({ _id: mongojs.ObjectId(userId)}, 
            { $pull: { subscriptions: { name: subName }}}, 
            { new: true })
        .then(theUser => callback(theUser) );
    }

};

module.exports = Controller;
