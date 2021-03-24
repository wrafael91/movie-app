import React, { Component } from 'react';
import axios from 'axios';
const apiKey = process.env.REACT_APP_API_KEY;
const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`; 

class NowPlaying extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nowPlaying: [],
            errorMessage: ''
        }
    }
    
    componentDidMount() {
        axios.get(nowPlayingUrl)
        .then(response => {
            console.log(response)
            this.setState({ nowPlaying: response.data.results })
        }).catch(error => {
            console.log(error);
            this.setState({ errorMessage: 'Error retrieving data' })
        })
    }

    render() {
        const { nowPlaying } = this.state
        return (
            <div className="container">
                <h3 className="top_rate">Now-Playing Movies</h3>
                <div className="row">
                    {nowPlaying.map((nowPlaying,i) => {
                    return(
                        <div className="col s12 m6 l3">
                            <div className="card">
                                <ul>
                                    <li key={nowPlaying.id} className="card-image waves-effect waves-block waves-light">
                                        <img src={`https://image.tmdb.org/t/p/w200/${nowPlaying.poster_path}`} alt={nowPlaying.title}/>
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

export default NowPlaying;