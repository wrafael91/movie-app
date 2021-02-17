import React from 'react';

const Nav = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="moviedb.html" className="brand-logo">TheMovieDB</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Top Rated</a></li>
                    <li><a href="popular.html">Popular</a></li>
                    <li><a href="upcoming.html">Upcoming</a></li>
                    <li><a href="playing.html">Now Playing</a></li>
                    <li><a href="favorites.html">Favorites</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;