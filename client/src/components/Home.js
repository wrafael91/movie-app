import React, { Component } from 'react';
import axios from 'axios';
const apiKey = process.env.REACT_APP_API_KEY;
const topRatedUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`; 

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            latestmovie: [],
            errorMessage: ''
        }
    }
    
    componentDidMount() {
        axios.get(topRatedUrl)
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
            <div style={{ width: '100%', margin: '0' }}>
                <div style={{background:`linear-gradient(to bottom, rgba(0,0,0,0)
                39%, rgba(0,0,0,0)
                41%, rgba(0,0,0,0.65)
                100%),
                url(''), #1c1c1c`,
                height: '500px',
                backgroundSize: '100%, cover',
                backgroundPosition: 'center, center',
                width: '100%',
                position: 'relative'}}>

                </div>
                <div style={{position:'absolute', maxWidth:'500px', bottom:'2rem', marginLeft:'2rem'}}>
                    <h2 style={{color: 'white'}}>Title</h2>
                    <p style={{color: 'white', fontSize: '1rem'}}>text</p>
                </div>
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
