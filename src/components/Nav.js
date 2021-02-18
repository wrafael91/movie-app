import React from 'react';
import TopRated from '../top-rated';
import Popular from '../Popular';

const Nav = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="moviedb.html" className="brand-logo">TheMovieDB</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href={<TopRated />}>Top Rated</a></li>
                    <li><a href={<Popular />}>Popular</a></li>
                    <li><a href="upcoming.html">Upcoming</a></li>
                    <li><a href="playing.html">Now Playing</a></li>
                    <li><a href="favorites.html">Favorites</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;