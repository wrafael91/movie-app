import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
        return(
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">TheMovieDB</a>
                    <div id="nav-mobile" class="right hide-on-med-and-down">
                        <Link to="/top-rated">TopRated </Link>
                        <Link to="/popular">Popular </Link>
                        <Link to="/upcoming">Upcoming </Link>
                        <Link to="/now-playing">Now-Playing </Link>
                    </div>
                </div>
            </nav>
            
        )
}


export default Nav;