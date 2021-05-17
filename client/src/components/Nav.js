import React from 'react';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/Nav.css';

export default function Nav(props) {

    let history = useHistory();
    
    const logout = () => {
        sessionStorage.clear();
        props.onLogout()
        history.push("/home");
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <br/>
            <br/>
            <br/>
            <Link className="navbar-brand" to="/home"><strong>TMDB</strong></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {
                props.logged ? 
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item-active"><Link className="nav-link" to="/home">Home</Link></li>
                        <li className="nav-item-active"><Link className="nav-link" to="/top-rated">TopRated</Link></li>
                        <li className="nav-item-active"><Link className="nav-link" to="/popular">Popular</Link></li>
                        <li className="nav-item-active"><Link className="nav-link" to="/upcoming">Upcoming</Link></li>
                        <li className="nav-item-active"><Link className="nav-link" to="/now-playing">Now-Playing</Link></li>
                        <li className="nav-item-active"><Link className="nav-link" to="/favorites">Favorites</Link></li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/home"><i className="fas fa-user"><span> Welcome {sessionStorage.getItem('name')}</span> </i></Link></li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        <Link onClick={()=>logout()} className="btn btn-danger mr-sm-2" to="/top-rated" role="button">Logout</Link>
                    </div>
                </div>
            : 
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item-active"><Link className="nav-link" to="/home">Home</Link></li>
                        <li className="nav-item-active"><Link className="nav-link" to="/top-rated">TopRated</Link></li>
                        <li className="nav-item-active"><Link className="nav-link" to="/popular">Popular</Link></li>
                        <li className="nav-item-active"><Link className="nav-link" to="/upcoming">Upcoming</Link></li>
                        <li className="nav-item-active"><Link className="nav-link" to="/now-playing">Now-Playing</Link></li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        <Link className="btn btn-primary mr-sm-3" to="/signup" role="button">SignUp</Link>
                        <Link className="btn btn-success my-2 my-sm-0" to="/login" role="button">Login</Link>
                    </div>
                </div>
            }
            
        </nav>  
    )
}