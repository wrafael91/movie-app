import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import MainImage from './MainImage';
const apiKey = process.env.REACT_APP_API_KEY;

function MovieInfo(props) {
    
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const movieId = props.match.params.movieId
        Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
            .then(response => response.data)
            .then(response => {
                setMovie(response)
            })
    })

    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <div >
            {movie &&
                <MainImage image={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} 
                title={movie.original_title} text={movie.overview}/>
            }

            <br/>
            <br/>
            <div style={{width: '85%', margin: '1rem auto'}}>
                <div>
                    <button type="submit" className="btn btn-success mx-auto d-block">Add to Favorite</button>
                </div>
                <br/>
                
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Date</th>
                            <th scope="col">Score</th>
                            <th scope="col">Runtime</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{movie.original_title}</td>
                            <td>{movie.release_date}</td>
                            <td>{movie.vote_average}</td>
                            <td>{movie.runtime + ' min'}</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th scope="col">Revenue</th>
                            <th scope="col">Votes</th>
                            <th scope="col">Status</th>
                            <th scope="col">Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{'USD' + formatter.format(movie.revenue)}</td>
                            <td>{movie.vote_count}</td>
                            <td>{movie.status}</td>
                            <td>{movie.popularity}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button className="btn btn-primary mx-auto d-block">Starring info</button>
                    <hr/>
                </div>
            </div> 
        </div>
    )
}

export default MovieInfo

