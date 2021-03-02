import React, { Component } from 'react';
import axios from 'axios';

const nowPlayingUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fa75b26c24267f9f093f0967d4af43ed'; 

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
            <h2 className="now_playing">Now Playing Movies</h2>
            <div className="row">
                <div className="col s12">
                    <div className="card-image">
                    {
                    nowPlaying.map((nowPlaying,i) => {
                    return(
                        <img src={`https://image.tmdb.org/t/p/w200/${nowPlaying.poster_path}`} alt={nowPlaying.title}/>
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

export default NowPlaying;