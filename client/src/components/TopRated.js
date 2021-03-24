import React, { Component } from 'react';
import axios from 'axios';
const apiKey = process.env.REACT_APP_API_KEY;
const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`; 

class TopRated extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topmovie: [],
            errorMessage: ''
        }
    }
    
    componentDidMount() {
        axios.get(topRatedUrl)
        .then(response => {
            console.log(response)
            this.setState({ topmovie: response.data.results })
        }).catch(error => {
            console.log(error);
            this.setState({ errorMessage: 'Error retrieving data' })
        })
    }

    render() {
        const { topmovie } = this.state
        return (
            <div className="container">
                <h3 className="top_rate">Top Rated Movies</h3>
                <div className="row">
                    {topmovie.map((topmovie,i) => {
                    return(
                        <div className="col s12 m6 l3">
                            <div className="card">
                                <ul>
                                    <li key={topmovie.id} className="card-image waves-effect waves-block waves-light">
                                        <img src={`https://image.tmdb.org/t/p/w200/${topmovie.poster_path}`} alt={topmovie.title}/>
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

export default TopRated;