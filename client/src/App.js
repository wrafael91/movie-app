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

const userValidated = () => {
    const token = sessionStorage.getItem('token');
    if (token) {
        return true
    } else {
        return false
    }
}

// const SecureRoute = (props) => {
//     return userValidated() ? <Route {...props} /> : <Redirect to='/login' />
// }

const PublicRoute = (props => {
    return userValidated() ? <Redirect to='/login' /> : <Route {...props} /> 
})

function MovieApp() {
    return (
        <BrowserRouter>
            <div>
                <Nav />
                <Switch>
                    <Route path="/top-rated" component={TopRated}/>
                    <Route path="/popular" component={Popular}/>
                    <Route path="/upcoming" component={Upcoming}/>
                    <Route path="/now-playing" component={NowPlaying}/>
                    <Route path="/signup" component={Register}/>
                    <PublicRoute path="/login" component={Login}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/favorites" component={Favorites}/>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
}


export default MovieApp;
