import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import TopRated from './TopRated';
import Popular from './Popular';
import Upcoming from './Upcoming';
import NowPlaying from './NowPlaying';
import SignUp from './SignUpForm'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';


class MovieApp extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Nav />
                    <Redirect from="/" to="/top-rated"/>
                    <Switch>
                        <Route path="/top-rated" component={TopRated}/>
                        <Route path="/popular" component={Popular}/>
                        <Route path="/upcoming" component={Upcoming}/>
                        <Route path="/now-playing" component={NowPlaying}/>
                        <Route path="/signup" component={SignUp}/>
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default MovieApp;
