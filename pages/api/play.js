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
                    play(user)
                        .then((game) => {
                            return res.status(200).json(game);
                        })
                        .catch((err) => {
                            return res.status(405).send(err);
                        });
                }
            });
        }
    });
}

const play = async (user) => {
    if (user.games_left <= 0) {
        throw new Error(`No games left for ${user.username}.`);
    }

    let opponent = await User.aggregate([
        { $match: { _id: { $ne: user._id } } },
        { $sample: { size: 1 } },
    ]);
    opponent = opponent[0];

    const result = Math.random() < 0.5;

    const newPlayerRating = result ? user.rating + 30 : user.rating - 30;
    const newOpponentRating = result
        ? opponent.rating - 30
        : opponent.rating + 30;
    const ratingDelta = result ? 30 : -30;
    const opponentRatingDelta = result ? -30 : 30;

    await User.findByIdAndUpdate(user._id, {
        rating: newPlayerRating,
        wins: user.wins + (result ? 1 : 0),
        losses: user.losses + (result ? 0 : 1),
        games_left: user.games_left - 1,
    });
    await User.findByIdAndUpdate(opponent._id, {
        rating: newOpponentRating,
        wins: opponent.wins + (result ? 0 : 1),
        losses: opponent.losses + (result ? 1 : 0),
    });

    return {
        opponentUsername: opponent.username,
        opponentNewRating: newOpponentRating,
        opponentRatingDelta: opponentRatingDelta,
        username: user.username,
        newRating: newPlayerRating,
        ratingDelta: ratingDelta,
        result: result,
        gamesLeft: user.games_left - 1,
    };
};
