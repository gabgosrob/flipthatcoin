const jwt = require("jsonwebtoken");
const EloRating = require("elo-rating");

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
                    play(user)
                        .then((game) => {
                            return res.status(200).json(game);
                        })
                        .catch((err) => {
                            console.log(err);
                            return res.status(500).send(err);
                        });
                }
            });
        }
    });
}

const play = async (user) => {
    let opponent = await User.aggregate([
        { $match: { _id: { $ne: user._id } } },
        { $sample: { size: 1 } },
    ]);
    opponent = opponent[0];

    const result = Math.random() < 0.5;
    const newRatings = EloRating.calculate(
        user.rating,
        opponent.rating,
        result
    );

    await User.findByIdAndUpdate(user._id, {
        rating: newRatings.playerRating,
        wins: user.wins + (result ? 1 : 0),
        losses: user.losses + (result ? 0 : 1),
    });
    await User.findByIdAndUpdate(opponent._id, {
        rating: newRatings.opponentRating,
        wins: opponent.wins + (result ? 0 : 1),
        losses: opponent.losses + (result ? 1 : 0),
    });

    return {
        opponentUsername: opponent.username,
        opponentNewRating: newRatings.opponentRating,
        opponentRatingDelta: newRatings.opponentRating - opponent.rating,
        username: user.username,
        newRating: newRatings.playerRating,
        ratingDelta: newRatings.playerRating - user.rating,
        result: result,
    };
};
