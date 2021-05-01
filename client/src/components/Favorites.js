import React, { useEffect, useState } from 'react'
import Axios from 'axios';
export default function Favorites(props) {

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)

    const variable = {
            userFrom: props.userFrom,
            movieId: props.movieId,
            movieTitle: props.movieInfo.original_title,
            movieImage: props.movieInfo.backdrop_path,
            movieRunTime: props.movieInfo.runtime
    }


    useEffect(() => {

        Axios.post('/app/favorite/favoriteNumber', variable)
            .then(response => {
                if (response.data.success) {
                    setFavoriteNumber(response.data.FavoriteNumber)
                    
                } else {
                    alert('Failed to get favoriteNumber')
                }
            })

            Axios.post('/app/favorite/favorited', variable)
                .then(response => {
                    if(response.data.success) {
                        setFavorited(response.data.Favorited)
                    } else {
                        alert('Failed to get favorite info')
                    }
                })

    }, [])

    const onClickFavorite = () => {
        if(Favorited) {

        } else {
            Axios.post('/app/favorite/addToFavorite', variable)
            .then(response => {
                if (response.data.success) {

                } else {
                    alert('Failed to add to favorites')
                }
            })
        }
    }

    return (
        <div>
            <button
            onClick={onClickFavorite} 
            type="submit" 
            className="btn btn-success mx-auto d-block">
            {Favorited ? "Remove from Favorite" : "Add to Favorite "}
            {FavoriteNumber}
            </button>
        </div>
    )
}
