import React, { Component } from 'react';
import Axios from 'axios';
import MainImage from './MainImage';

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
        Axios.get(topRatedUrl)
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
            <div style={{ width: '100%', margin: 0 }}>

                {topmovie[0] && 
                    <MainImage  image={`http://image.tmdb.org/t/p/w1280${topmovie[0].backdrop_path}`}
                    title={topmovie[0].original_title} text={topmovie[0].overview}/>
                }

                <div style={{width: '85%', margin: '1rem auto'}}>
                    <h2>Top-Rated</h2>
                    <hr/> 
                </div>

                <div className="container">
                    <div className="row">
                        {topmovie.map((topmovie) => {
                        return(
                            <div className="col s12 m6 l3">
                                <div className="card" style={{marginBottom: '2em', width: '12rem'}}>
                                    <ul className="list-group" style={{listStyle: 'none'}}>
                                        <li key={topmovie.id} >
                                            <img src={`https://image.tmdb.org/t/p/w200/${topmovie.poster_path}`} alt={topmovie.title} />
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

export default TopRated;