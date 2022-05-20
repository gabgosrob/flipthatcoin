const User = require("../../models/user.js");

const mongoose = require("mongoose");
mongoose.connect(
    `mongodb+srv://krikite:${process.env.MONGO_PASSWORD}@flipthatcoin.9xuoc.mongodb.net/flipthatcoin?retryWrites=true&w=majority`
);

export default async function handler(req, res) {
    if (req.method === "POST") {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];

        if (token == null || token != process.env.API_SECRET) {
            return res.status(401).send();
        }

        User.updateMany({}, { $set: { games_left: 10 } }, (err, result) => {
            if (err) {
                return res.status(500).send();
            }

            return res.status(200).send();
        });
    }
}
