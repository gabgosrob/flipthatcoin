const jwt = require("jsonwebtoken");
const User = require("../../models/user.js");

const mongoose = require("mongoose");
mongoose.connect(
    `mongodb+srv://krikite:${process.env.MONGO_PASSWORD}@flipthatcoin.9xuoc.mongodb.net/flipthatcoin?retryWrites=true&w=majority`
);

export default async function handler(req, res) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) {
        return res.status(401).send();
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, userToken) => {
        if (err) {
            return res.status(403).send();
        } else {
            User.findById(userToken.id).then((user) => {
                if (!user) {
                    return res.status(403).send();
                } else {
                    return res.status(200).send(user.toDTO());
                }
            });
        }
    });
}
