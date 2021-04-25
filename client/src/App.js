import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import TopRated from './components/TopRated';
import Popular from './components/Popular';
import Upcoming from './components/Upcoming';
import NowPlaying from './components/NowPlaying';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Favorites from './components/Favorites';
import MovieInfo from './components/MovieInfo';

const userValidated = () => {
    const token = sessionStorage.getItem('token');
    if (token) {
        return true
    } else {
        return false
    }
}

const SecureRoute = (props) => {
    return userValidated() ? <Route {...props} /> : <Redirect to='/login' />
}

const PublicRoute = (props => {
    return userValidated() ? <Redirect to='/home' /> : <Route {...props} /> 
})

function MovieApp() {
    return (
        <BrowserRouter>
            <div>
                <Nav />
                <Switch>
                    <SecureRoute path="/top-rated" component={TopRated}/>
                    <SecureRoute path="/popular" component={Popular}/>
                    <SecureRoute path="/upcoming" component={Upcoming}/>
                    <SecureRoute path="/now-playing" component={NowPlaying}/>
                    <Route path="/signup" component={Register}/>
                    <PublicRoute path="/login" component={Login}/>
                    <SecureRoute path="/home" component={Home}/>
                    <SecureRoute path="/favorites" component={Favorites}/>
                    <SecureRoute path="/movie/:id" component={MovieInfo}/>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
}


export default MovieApp;
