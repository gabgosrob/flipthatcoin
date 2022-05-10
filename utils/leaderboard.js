const User = require("../models/user.js");

const mongoose = require("mongoose");
mongoose.connect(
    `mongodb+srv://krikite:${process.env.MONGO_PASSWORD}@flipthatcoin.9xuoc.mongodb.net/flipthatcoin?retryWrites=true&w=majority`
);

export const getLeaders = async function () {
    const topUsersResult = await User.find({}).sort({ rating: -1 }).limit(10);
    const topUsers = topUsersResult.map((user) => user.toDTO());

    return JSON.parse(JSON.stringify(topUsers));
};
