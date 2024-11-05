const { mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        requires: true,
        inique: true,
        minLength:3,
        trim: true
    },
    password: {
        type: String,
        reauired: true,
        minLength: 8,
        trim: true
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = {
    User
}