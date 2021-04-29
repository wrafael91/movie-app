import React, { useState, useEffect } from 'react';


export default function Nav() {

    const [menu, setMenu] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('token')){
            setMenu(true)
        }
    }, [])

    const logout = () => {
        sessionStorage.clear();
        window.location.href="/home";
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <br/>
            <br/>
            <br/>
            <a className="navbar-brand" href="/home"><strong>TMDB</strong></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {
                menu?
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item-active"><a className="nav-link" href="/home">Home</a></li>
                        <li className="nav-item-active"><a className="nav-link" href="/top-rated">TopRated</a></li>
                        <li className="nav-item-active"><a className="nav-link" href="/popular">Popular</a></li>
                        <li className="nav-item-active"><a className="nav-link" href="/upcoming">Upcoming</a></li>
                        <li className="nav-item-active"><a className="nav-link" href="/now-playing">Now-Playing</a></li>
                        <li className="nav-item-active"><a className="nav-link" href="/favorites">Favorites</a></li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="/home"><i className="fas fa-user"> Welcome {sessionStorage.getItem('name')}</i></a></li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <a onClick={()=>logout()} className="btn btn-danger mr-sm-2" href="/top-rated" role="button">Logout</a>
                    </form>
                </div>
            : 
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item-active"><a className="nav-link" href="/home">Home</a></li>
                        <li className="nav-item-active"><a className="nav-link" href="/top-rated">TopRated</a></li>
                        <li className="nav-item-active"><a className="nav-link" href="/popular">Popular</a></li>
                        <li className="nav-item-active"><a className="nav-link" href="/upcoming">Upcoming</a></li>
                        <li className="nav-item-active"><a className="nav-link" href="/now-playing">Now-Playing</a></li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <a className="btn btn-primary mr-sm-3" href="/signup" role="button">SignUp</a>
                        <a className="btn btn-success my-2 my-sm-0" href="/login" role="button">Login</a>
                    </form>
                </div>
            }
            
        </nav>  
    )
}
