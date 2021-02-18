import React, { Component } from 'react';
import axios from 'axios';

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
              <h2 className="top_rate">Top Rated Movies</h2>
              <div className="row">
                      <div className="col s12 offset-s1">
                          <div className="card-image">
                              {
                    
                              topmovies.map((topmovie,i) => {
                                  return(
                                    <img src={`https://image.tmdb.org/t/p/w200/${topmovie.poster_path}`} alt={topmovie.title}/>
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