import React, { Component } from 'react';
import Nav from './Nav';
import TopRated from '../top-rated';
import Popular from '../Popular';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
class MovieApp extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Nav />
              <Route exact path="/toprated" element={<TopRated />}/>
              <Route exact path="/popular" element={<Popular />}/>
            </Switch>
          </div>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default MovieApp;
