import React, { Component } from 'react';
import Axios from 'axios';
import MainImage from './MainImage';
const apiKey = process.env.REACT_APP_API_KEY;
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`; 

class Popular extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popularMovie: [],
            errorMessage: ''
        }
    }
    
    componentDidMount() {
        Axios.get(popularUrl)
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
            <div style={{ width: '100%', margin: 0 }}>
                {popularMovie[0] && 
                    <MainImage  image={`http://image.tmdb.org/t/p/w1280${popularMovie[0].backdrop_path}`}
                    title={popularMovie[0].original_title} text={popularMovie[0].overview}/>
                }

                <div style={{width: '85%', margin: '1rem auto'}}>
                    <h2>Popular</h2>
                    <hr/>
                </div>
                <div className="container">
                    <div className="row">
                        {popularMovie.map((popularMovie) => {
                        return(
                            <div className="col s12 m6 l3">
                                <div className="card" style={{marginBottom: '2em', width: '12rem'}}>
                                    <ul className="list-group" style={{listStyle: 'none'}}>
                                        <li key={popularMovie.id} >
                                            <img src={`https://image.tmdb.org/t/p/w200/${popularMovie.poster_path}`} alt={popularMovie.title}/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )
                        })}
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Popular;