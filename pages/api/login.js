const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user.js");

const mongoose = require("mongoose");
mongoose.connect(
    `mongodb+srv://krikite:${process.env.MONGO_PASSWORD}@flipthatcoin.9xuoc.mongodb.net/flipthatcoin?retryWrites=true&w=majority`
);

export default async function handler(req, res) {
    if (req.method === "POST") {
        const user = await User.findOne({ username: req.body.username });

        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            res.status(200).send();
        } else {
            res.status(401).send();
        }
    }
}
