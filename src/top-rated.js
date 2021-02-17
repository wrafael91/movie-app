import React, { Component } from 'react';
import axios from 'axios';
import MovieBox from './MovieBox';

const topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=fa75b26c24267f9f093f0967d4af43ed'; 

class TopRated extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topmovies: [],
            errorMessage: ''
        }
    }
    
    componentDidMount() {
      axios.get(topRatedUrl)
      .then(response => {
          console.log(response)
          this.setState({ topmovies: response.data.results })
      }).catch(error => {
          console.log(error);
          this.setState({ errorMessage: 'Error retrieving data' })
      })
    }

    render() {
        const { topmovies } = this.state
      return (
          <div className="container">
              <h2>Top Rated Movies</h2>
              <div className="row">
                      <div className="col s12">
                          <div className="card-image">
                              {
                            //   topmovies.map((topmovie,i) => <div key={topmovie.id}><img src={`https://image.tmdb.org/t/p/w200/${topmovie.poster_path}`} alt={topmovie.title}/></div>)
                              topmovies.map((topmovie,i) => {
                                  return(
                                      <MovieBox  />
                                  )
                              })
                            }
                                                  
                          </div>
                      </div>
              </div>
          </div>
      )
    }
}

export default TopRated;