import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
    return(
        <div class="card-body text-white bg-dark mb-3">
            <div className="container">
                <div className="row-footer">
                    <div className="movie-title">
                        <br/>
                        <h5 className="card-title text-white">TheMovieDB</h5>
                        <p className="card-text text-white">Get the latest info about all movies</p>
                    </div>
                    <br/>
                </div>
                <br/>
                <div className="copyright">
                    <div className="col-xs-6">
                    © 2021 Copyright - TheMovieDB - Developed by @wrmp91
                    </div>
                </div>
            </div>
            
        </div>
    )
}
