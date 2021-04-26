import React, { Component } from 'react';
import Axios from 'axios';
import MainImage from './MainImage';
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
        Axios.get(nowPlayingUrl)
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
            <div style={{ width: '100%', margin: 0 }}>
                {nowPlaying[0] && 
                    <MainImage  image={`http://image.tmdb.org/t/p/w1280${nowPlaying[0].backdrop_path}`}
                    title={nowPlaying[0].original_title} text={nowPlaying[0].overview}/>
                }

                <div style={{width: '85%', margin: '1rem auto'}}>
                    <h2>Now-Playing</h2>
                    <hr/>
                </div>
                <div className="container">
                    <div className="row">
                        {nowPlaying.map((nowPlaying) => {
                        return(
                            <div className="col s12 m6 l3">
                                <div className="card" style={{marginBottom: '2em', width: '12rem'}}>
                                    <ul className="list-group" style={{listStyle: 'none'}}>
                                        <li key={nowPlaying.id} >
                                            <img src={`https://image.tmdb.org/t/p/w200/${nowPlaying.poster_path}`} alt={nowPlaying.title}/>
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

export default NowPlaying;