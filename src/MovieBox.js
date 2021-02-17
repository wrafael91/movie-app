import React from 'react';

const MovieBox = (props) => {
    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                       props.movie == null ? <img src={`https://image.tmdb.org/t/p/w200/${props.poster_path}`} alt="card"/> : null 
                    }
                </div>
            </div>
            <div className="card-content">
                <p><a href="#">View Details</a></p>
            </div>
        </div>
    )
}

export default MovieBox;