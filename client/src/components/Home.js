import React, {Component} from 'react';
import Axios from 'axios';
import MainImage from './MainImage';
const apiKey = process.env.REACT_APP_API_KEY;
const latestMovieUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`; 

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            latestmovie: [],
            error: ''
        }
    }

    componentDidMount() {
        Axios.get(latestMovieUrl)
        .then(response => {
            console.log(response)
            this.setState({ latestmovie: response.data.results })
        }).catch(error => {
            console.log(error);
            this.setState({ errorMessage: 'Error retrieving data' })
        })
    }
        
    
    render() {
        return (
        <div style={{ width: '100%', margin: 0 }}>
            
            {this.state.latestmovie[0] && 
                <MainImage  image={`http://image.tmdb.org/t/p/w1280${this.state.latestmovie[0].backdrop_path}`}
                title={this.state.latestmovie[0].original_title} text={this.state.latestmovie[0].overview}/>
            }

            <div style={{width: '85%', margin: '1rem auto'}}>
                <h2>Latest Movies</h2>
                <hr/>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <button onClick='' className="btn btn-info"> Load More </button>
                </div>
            </div>
        </div>
    )
    }
} 
    
export default Home;
