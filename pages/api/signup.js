const bcrypt = require("bcryptjs");
const User = require("../../models/user.js");

const mongoose = require("mongoose");
mongoose.connect(
    `mongodb+srv://krikite:${process.env.MONGO_PASSWORD}@flipthatcoin.9xuoc.mongodb.net/flipthatcoin?retryWrites=true&w=majority`
);

export default async function handler(req, res) {
    if (req.method === "POST") {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const user = new User({
            username: req.body.username,
            password: hash,
        });
        await user.save(function (err) {
            if (err) {
                res.status(500).send("Error creating user");
            } else {
                res.status(200).send("User created");
            }
        });
    }
}
