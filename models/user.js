const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        default: 1500,
    },
    wins: {
        type: Number,
        default: 0,
    },
    losses: {
        type: Number,
        default: 0,
    },
});

userSchema.methods.toDTO = function () {
    const obj = this.toObject();

    return {
        id: obj._id,
        username: obj.username,
        rating: obj.rating,
        wins: obj.wins,
        losses: obj.losses,
    };
};

userSchema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
