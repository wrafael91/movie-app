import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
    return(
        <div class="card-body text-white bg-dark mb-3">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="card-title text-white">TheMovieDB</h5>
                        <p className="card-text text-white">Mantente al día con toda la información sobre peliculas.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="card-title text-white">Menú</h5>
                        <ul>
                            <li><Link className="text-white" to="/top-rated">TopRated </Link></li>
                            <li><Link className="text-white" to="/popular">Popular </Link></li>
                            <li><Link className="text-white" to="/upcoming">Upcoming </Link></li>
                            <li><Link className="text-white" to="/now-playing">Now-Playing </Link></li>
                        </ul>
                    </div>
                </div>
                <div className="card-title">
                    <div className="col l6 s12">
                    © 2021 Copyright - TheMovieDB - Developed by @wrmp91
                    </div>
                </div>
            </div>
            
        </div>
    )
}
