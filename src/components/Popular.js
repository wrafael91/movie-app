import React, { Component } from 'react';
import axios from 'axios';

const popularUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=fa75b26c24267f9f093f0967d4af43ed'; 

class Popular extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popularMovies: [],
            errorMessage: ''
        }
    }
    
    componentDidMount() {
      axios.get(popularUrl)
      .then(response => {
          console.log(response)
          this.setState({ popularMovies: response.data.results })
      }).catch(error => {
          console.log(error);
          this.setState({ errorMessage: 'Error retrieving data' })
      })
    }

    render() {
        const { popularMovies } = this.state
      return (
          <div className="container">
            <h2 className="top_rate">Popular Movies</h2>
            <div className="row">
                <div className="col s12">
                    <div className="card-image">
                    {
                    popularMovies.map((popularMovie,i) => {
                    return(
                        <img src={`https://image.tmdb.org/t/p/w200/${popularMovie.poster_path}`} alt={popularMovie.title}/>
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

export default Popular;