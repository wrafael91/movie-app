import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import MainImage from './MainImage';
import GridCard from './GridCard';
import apikeys from '../config/config';
const movieUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apikeys.REACT_APP_API_KEY}&language=en-US&page=1`;


export default function NowPlaying() {

    const [movies, setMovies] = useState([]);
    const [CurrentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        fetchMovies(movieUrl)
    }, []);

    const fetchMovies = (path) => {
        Axios.get(path)
            .then(response => {
                setMovies([...movies, ...response.data.results])
                setCurrentPage(response.data.page)
            })
    } 
    const handleClick = () => {
        const movieUrl1 = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikeys.REACT_APP_API_KEY}&language=en-US&page=${CurrentPage + 1}`;
        fetchMovies(movieUrl1)
    }

    return (
        <div style={{ width: '100%', margin: 0 }}>
            {movies[0] &&
                <MainImage image={`http://image.tmdb.org/t/p/w1280${movies[0].backdrop_path}`} 
                title={movies[0].original_title} text={movies[0].overview}/>
            } 
            <div style={{width: '85%', margin: '1rem auto'}}>
                <h2>Now-Playing Movies</h2>
                <hr/>
            </div>

            {/* Grid Cards */}

            <div className="container">
                <div className="row">
                    {movies && movies.map((movie, index) => (
                        <React.Fragment key={index}>
                            <GridCard
                                image={movie.poster_path && `http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                movieId={movie.id}
                            />
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <button onClick={handleClick} className="btn btn-info"> Load More </button>
            </div>
            <br/>
            <br/>
        </div>
    )
}