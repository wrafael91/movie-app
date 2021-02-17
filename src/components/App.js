import React, { Component } from 'react';
import Nav from './Nav';
// import SearchArea from './Search';
import TopRated from '../top-rated';
class MovieApp extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <TopRated/>
        {/* <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/> */}
      </div>
    )
  }
}

export default MovieApp;
