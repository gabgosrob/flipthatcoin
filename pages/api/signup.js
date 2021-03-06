const bcrypt = require("bcryptjs");
const User = require("../../models/user.js");

const mongoose = require("mongoose");
mongoose.connect(
    `mongodb+srv://krikite:${process.env.MONGO_PASSWORD}@flipthatcoin.9xuoc.mongodb.net/flipthatcoin?retryWrites=true&w=majority`
);

export default async function handler(req, res) {
    if (req.method === "POST") {
        if (req.body.username.length < 3 || req.body.username.length > 14) {
            return res.status(401).send();
        }
        if (req.body.password.length < 3 || req.body.password.length > 30) {
            return res.status(401).send();
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const user = new User({
            username: req.body.username,
            password: hash,
        });
        await user.save(function (err) {
            if (err) {
                return res.status(400).send();
            } else {
                return res.status(200).send();
            }
        });
    }
}
