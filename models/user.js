const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema();
userSchema.add({
    username: String,
    password: String,
    rating: Number,
    wins: Number,
    losses: Number,
});

const User = mongoose.model("User", userSchema);

exports.model = User;
