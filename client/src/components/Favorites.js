import React, { useEffect, useState } from 'react'
import Axios from 'axios';
const favNumUrl = (`${process.env.REACT_APP_API_URL}/app/favorite/favoriteNumber`);
const favUrl = (`${process.env.REACT_APP_API_URL}/app/favorite/favorited`);

const favoriteNumber = (path, callback) => {
    Axios.post(path)
        .then(callback)
}

const favorited = (path, callback) => {
    Axios.post(path)
        .then(callback)
}

export default function Favorites(props) {
    const variable = {
        userFrom: props.userFrom,
        movieId: props.movieId,
        movieTitle: props.movieInfo.original_title,
        movieImage: props.movieInfo.backdrop_path,
        movieRunTime: props.movieInfo.runtime
    }

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)



    useEffect(() => {
        favoriteNumber(favNumUrl, (response) => {
            if (response.data.success) {
                setFavoriteNumber(response.data.FavoriteNumber)
            } else {
                alert('Failed to get favoriteNumber')
            }
        })
        favorited(favUrl, (response) => {
            if(response.data.success) {
                setFavorited(response.data.Favorited)
            } else {
                alert('Failed to get favorite info')
            }
        })
    }, [])

    const onClickFavorite = () => {
        if(Favorited) {
            Axios.post(`${process.env.REACT_APP_API_URL}/app/favorite/removeFromFavorite`, variable)
            .then(response => {
                if (response.data.success) {
                    setFavoriteNumber(FavoriteNumber - 1)
                    setFavorited(!Favorited)
                } else {
                    alert('Failed to remove from favorite')
                }
            })
        } else {
            Axios.post(`${process.env.REACT_APP_API_URL}/app/favorite/addToFavorite`, variable)
            .then(response => {
                if (response.data.success) {
                    setFavoriteNumber(FavoriteNumber + 1)
                    setFavorited(!Favorited)
                } else {
                    alert('Failed to add to favorites')
                }
            })
        }
    }

    return (
        <div>
            <br/>
            <br/>
            <button
            onClick={onClickFavorite} 
            type="submit" 
            className="btn btn-success mx-auto d-block">
            {Favorited ? "Remove from Favorite " : "Add to Favorite "}{FavoriteNumber}</button>
        </div>
    )
}
