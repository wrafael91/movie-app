import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import MainImage from './MainImage';
import GridCard from './GridCard';
import Favorites from './Favorites';
import '../styles/MovieInfo.css';
const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = 'https://api.themoviedb.org/3/movie';

function MovieInfo(props) {
    const movieId = props.match.params.movieId
    const [Movies, setMovie] = useState([]);
    const [Casts, setCast] = useState([]);
    const [Actor, setActor] = useState(false);

    useEffect(() => {
        
        Axios.get(`${apiUrl}/${movieId}?api_key=${apiKey}&language=en-US`)
            .then(response => response.data)
            .then(response => {
                
                setMovie(response)

                Axios.get(`${apiUrl}/${movieId}/credits?api_key=${apiKey}`)
                .then(response => response.data)
                
                .then(response => {
                    setCast(response.cast)
                })
            })
    }, [movieId])

    const handleClick = () => {
        setActor(!Actor)
    }

    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <div>
            <div>
                {Movies &&
                <MainImage image={`http://image.tmdb.org/t/p/w1280${Movies.backdrop_path}`} 
                title={Movies.original_title} year={Movies.release_date} text={Movies.overview}/>
                }
            </div>
            
            <div className="movie-data">
                <Favorites userFrom={localStorage.getItem('iduser')} movieId={movieId} movieInfo={Movies}/>
                <br/>
                <br/>
                <span>Movie Info</span>
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
                            <td>{Movies.original_title}</td>
                            <td>{Movies.release_date}</td>
                            <td>{Movies.vote_average}</td>
                            <td>{Movies.runtime + ' min'}</td>
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
                            <td>{'USD' + formatter.format(Movies.revenue)}</td>
                            <td>{Movies.vote_count}</td>
                            <td>{Movies.status}</td>
                            <td>{Movies.popularity}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button 
                    className="btn btn-primary mx-auto d-block"
                    onClick={handleClick}>Starring</button>
                    <hr/>
                </div>
            </div>
            
            {Actor && 
                <div className="container">
                    <div className="row">
                        {Casts && Casts.map((Cast, index) => (
                            <React.Fragment key={index}>
                                {Cast.profile_path &&
                                    <GridCard
                                        actor={Cast.name} 
                                        image={`http://image.tmdb.org/t/p/w500${Cast.profile_path}`}
                                    />
                                }
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            }

            

        </div>
    )
}

export default MovieInfo

