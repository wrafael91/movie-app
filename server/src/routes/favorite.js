const { Router } = require('express');
const router = Router();
const Favorites = require('../models/Favorite.Model.js'); 

router.post('/favoriteNumber', (req, res) => {
    Favorites.find({"movieId":req.body.movieId})
        .exec((err, favorite) => {
            if(err) return res.status(400).send(err)
            res.status(200).json({success: true, FavoriteNumber: favorite.length})
        })
})

router.post('/favorited', (req, res) => {
    Favorites.find({"movieId": req.body.movieId, "userFrom": req.body.userFrom})
        .exec((err, favorite) => {
            if(err) return res.status(400).send(err)
            let result = false;
            if(favorite.length !== 0) {
                result = true
            }
            res.status(200).json({success: true, Favorited: result})
        })
})

module.exports = router;