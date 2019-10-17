const axios = require("axios");

const API = {
    loginUser: function (userInfo) {
        return axios.post("/login", userInfo)
    },

    logoutUser: function () {
        return axios.get("/logout")
    },

    registerUser: function (userInput) {
        return axios.post("/register", userInput)
    },

    getUser: function () {
        return axios.get("/api/getuser")
    },

    addSubscription: function (subData) {
        return axios.post("/api/addsub", subData)
    },

    deleteSubscription: function (subData) {
        return axios.post("api/removesub", subData)
    }
}

module.exports = API;