import React, { Component } from 'react';
import axios from 'axios';

const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`; 

class Popular extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popularMovie: [],
            errorMessage: ''
        }
    }
    
    componentDidMount() {
      axios.get(popularUrl)
      .then(response => {
          console.log(response)
          this.setState({ popularMovie: response.data.results })
      }).catch(error => {
          console.log(error);
          this.setState({ errorMessage: 'Error retrieving data' })
      })
    }

    render() {
        const { popularMovie } = this.state
      return (
          <div className="container">
            <h3 className="top_rate">Popular Movies</h3>
            <div className="row">
                {popularMovie.map((popularMovie,i) => {
                return(
                    <div className="col s12 m6 l3">
                        <div className="card">
                            <ul>
                                <li key={popularMovie.id} className="card-image waves-effect waves-block waves-light">
                                    <img src={`https://image.tmdb.org/t/p/w200/${popularMovie.poster_path}`} alt={popularMovie.title}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
                })}
            </div>
          </div>
      )
    }
}

export default Popular;