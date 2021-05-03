const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FavoriteSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User.Model'
    },
    movieId: {
        type: String
    },
    movieTitle: {
        type: String
    },
    movieImage: {
        type: String
    },
    movieRunTime: {
        type: String
    }

});

const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = {Favorite}