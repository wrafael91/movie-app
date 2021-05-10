import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
    return(
        <div class="card-body text-white bg-dark mb-3">
            <div className="container">
                <div className="row-footer">
                    <div className="movie-title">
                        <span className="card-title text-white">TheMovieDB</span>
                        <p className="card-text text-white">Get the latest info about all movies</p>
                    </div>
                    <br/>
                </div>
                <br/>
                <div className="copyright">
                    <div className="col-xs-6">
                        <span>© 2021 Copyright - <a href="https://www.themoviedb.org/">TheMovieDB</a> - Developed by <a href="https://www.github.com/wrafael91">@wrmp91</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
