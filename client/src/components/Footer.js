import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return(
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">TheMovieDB</h5>
                        <p className="grey-text text-lighten-4">Mantente al día con toda la información sobre peliculas.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Menú</h5>
                        <ul>
                            <li><Link className="white-text" to="/top-rated">TopRated </Link></li>
                            <li><Link className="white-text" to="/popular">Popular </Link></li>
                            <li><Link className="white-text" to="/upcoming">Upcoming </Link></li>
                            <li><Link className="white-text" to="/now-playing">Now-Playing </Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                © 2021 Copyright - TheMovieDB
                </div>
            </div>
        </footer>
    )
}

export default Footer;