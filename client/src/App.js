import React, { Component } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import TopRated from './components/TopRated';
import Popular from './components/Popular';
import Upcoming from './components/Upcoming';
import NowPlaying from './components/NowPlaying';
import Register from './components/Register';
import Login from './components/Login';
import Index from './components/Index';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

class MovieApp extends Component {
    render() {
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
                        <Route path="/login" component={Login}/>
                        <Route path="/index" component={Index}/>
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default MovieApp;
