import React, { Component } from 'react';
import axios from 'axios';
const apiKey = process.env.REACT_APP_API_KEY;
const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`; 

class Upcoming extends Component {
    constructor(props) {
        super(props)
        this.state = {
            upcoming: [],
            errorMessage: ''
        }
    }
    
    componentDidMount() {
        axios.get(upcomingUrl)
        .then(response => {
            console.log(response)
            this.setState({ upcoming: response.data.results })
        }).catch(error => {
            console.log(error);
            this.setState({ errorMessage: 'Error retrieving data' })
        })
    }

    render() {
        const { upcoming } = this.state
        return (
            <div className="container">
                <h3 className="top_rate">Upcoming Movies</h3>
                <div className="row">
                    {upcoming.map((upcoming) => {
                    return(
                        <div className="col s12 m6 l3">
                            <div className="card" style={{marginBottom: '2em', width: '12rem'}}>
                                <ul className="list-group" style={{listStyle: 'none'}}>
                                    <li key={upcoming.id}>
                                        <img src={`https://image.tmdb.org/t/p/w200/${upcoming.poster_path}`} alt={upcoming.title}/>
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

export default Upcoming;