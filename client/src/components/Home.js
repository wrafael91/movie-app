import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import MainImage from './MainImage';
import GridCard from './GridCard';
import '../styles/MainImage.css';
import { POPULAR } from '../apis';
const movieUrl = `${POPULAR}&page=1`;


const fetchMovies = (path, callback) => {
    Axios.get(path)
        .then(callback)
} 
export default function Home() {

    const [movies, setMovies] = useState([]);
    const [CurrentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        fetchMovies(movieUrl, (response) => {
            setMovies((movies) => [...movies, ...response.data.results])
            setCurrentPage(response.data.page)
        })
    }, []);

    const handleClick = () => {
        const movieUrl1 = `${POPULAR}&page=${CurrentPage + 1}`;
        fetchMovies(movieUrl1, (response) => {
            setMovies((movies) => [...movies, ...response.data.results])
            setCurrentPage(response.data.page)
        })
    }

    return (
        <div className="image-container">
            {movies[0] &&
                <MainImage image={`http://image.tmdb.org/t/p/w1280${movies[0].backdrop_path}`} 
                title={movies[0].original_title} text={movies[0].overview} />
            } 
            <div className="movie-title">
                <h2>Latest Movies</h2>
                <hr/>
            </div>

            {/* Grid Cards */}

            <div className="container">
                <div className="row">
                    <div className="row cols-sm-6 cols-md-4 cols-lg-2">
                        {movies && movies.map((movie, index) => (
                            <React.Fragment key={index}>
                                <GridCard
                                    image={movie.poster_path && `http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    movieId={movie.id}
                                    title={movie.original_title}
                                />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            <div className="load-button">
                <button onClick={handleClick} className="btn btn-info"> Load More </button>
            </div>
            <br/>
            <br/>
        </div>
    )
}