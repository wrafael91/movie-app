import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
        return(
            <nav>
                <div class="nav-wrapper">
                    <div class="brand-logo">
                        <ul>
                            <li><Link to="/home"><h5><b>TMDB</b></h5></Link></li>
                        </ul>
                    </div>
                    <div id="nav-mobile" class="right hide-on-med-and-down">
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/top-rated">TopRated</Link></li>
                            <li><Link to="/popular">Popular</Link></li>
                            <li><Link to="/upcoming">Upcoming</Link></li>
                            <li><Link to="/now-playing">Now-Playing</Link></li>
                            <li><Link className="waves-effect waves-light btn" to="/signup">Sign-Up</Link></li>
                            <li><Link className="waves-effect waves-light btn" to="/login">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>  
        )
}


export default Nav;