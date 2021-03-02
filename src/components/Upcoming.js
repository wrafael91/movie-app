import React, { Component } from 'react';
import axios from 'axios';

const upcomingUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=fa75b26c24267f9f093f0967d4af43ed'; 

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
            <h2 className="upcoming">Upcoming Movies</h2>
            <div className="row">
                <div className="col s12">
                    <div className="card-image">
                    {
                    upcoming.map((upcoming,i) => {
                    return(
                        <img src={`https://image.tmdb.org/t/p/w200/${upcoming.poster_path}`} alt={upcoming.title}/>
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

export default Upcoming;