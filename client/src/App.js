import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import TopRated from './components/TopRated';
import Popular from './components/Popular';
import Upcoming from './components/Upcoming';
import NowPlaying from './components/NowPlaying';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import FavoritePage from './components/FavoritePage';
import MovieInfo from './components/MovieInfo';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

const userValidated = () => {
  const token = sessionStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

const SecureRoute = (props) => {
  return userValidated() ? <Route {...props} /> : <Redirect to="/login" />;
};

const PublicRoute = (props) => {
  return userValidated() ? <Redirect to="/home" /> : <Route {...props} />;
};

function MovieApp() {
  const [logged, setLogged] = useState(userValidated());
  return (
    <BrowserRouter>
      <div>
        <Nav logged={logged} onLogout={() => setLogged(false)} />
        <Switch>
          <SecureRoute path="/top-rated" component={TopRated} />
          <SecureRoute path="/popular" component={Popular} />
          <SecureRoute path="/upcoming" component={Upcoming} />
          <SecureRoute path="/now-playing" component={NowPlaying} />
          <Route path="/signup" component={Register} />
          <PublicRoute
            path="/login"
            component={() => <Login onLogin={() => setLogged(true)} />}
          />
          <SecureRoute path="/home" component={Home} />
          <SecureRoute path="/favorites" component={FavoritePage} />
          <SecureRoute path="/movie/:movieId" component={MovieInfo} />
          <Login onLogin={() => setLogged(true)} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default MovieApp;
