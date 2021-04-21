import React, { useState, useEffect } from 'react';


export default function Nav() {

    const [menu, setMenu] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('token')){
            setMenu(true)
        }
    }, [])

    const close = () => {
        sessionStorage.clear();
        window.location.href="/home";
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <br/>
            <br/>
            <br/>
            <a className="navbar-brand" href="/">TMDB</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item-active"><a className="nav-link" href="/home">Home</a></li>
                    <li className="nav-item-active"><a className="nav-link" href="/top-rated">TopRated</a></li>
                    <li className="nav-item-active"><a className="nav-link" href="/popular">Popular</a></li>
                    <li className="nav-item-active"><a className="nav-link" href="/upcoming">Upcoming</a></li>
                    <li className="nav-item-active"><a className="nav-link" href="/now-playing">Now-Playing</a></li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <a type="submit" className="btn btn-primary my-2 my-sm-0" href="/signup" role="button">Sign-Up</a>
                    <a type="submit" className="btn btn-success my-2 my-sm-0" href="/login" role="button">Login</a>
                </form>
            </div>
        </nav>  
    )
}
