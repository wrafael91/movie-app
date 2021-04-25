import React, {Component} from 'react';
import Axios from 'axios';
import MainImage from './MainImage';
const apiKey = process.env.REACT_APP_API_KEY;
const latestMovieUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`; 

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
        const { latestmovie } = this.state
        return (
        <div style={{ width: '100%', margin: 0 }}>
            
            {latestmovie[0] && 
                <MainImage  image={`http://image.tmdb.org/t/p/w1280${latestmovie[0].backdrop_path}`}
                title={latestmovie[0].original_title} text={latestmovie[0].overview}/>
            }

            <div style={{width: '85%', margin: '1rem auto'}}>
                <h2>Latest Movies</h2>
                <hr/>
            </div>

            <div className="container">
                <div className="row">
                    {latestmovie.map((latestmovie) => {
                    return(
                        <div className="col s12 m6 l3">
                            <div className="card" style={{marginBottom: '2em', width: '12rem'}}>
                                <ul className="list-group" style={{listStyle: 'none'}}>
                                    <a href={`/movie/${latestmovie.id}`}>
                                        <li key={latestmovie.id} >
                                            <img src={`https://image.tmdb.org/t/p/w200/${latestmovie.poster_path}`} alt={latestmovie.title} />
                                        </li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    )
                    })}
                </div>
            </div>
            {/* <div style={{display:'flex',justifyContent:'center'}}>
                <button onClick={handleClick} className="btn btn-info"> Load More </button>
            </div> */}
            <br/>
            <br/>
        </div>
    )
    }
} 
    
export default Home;
