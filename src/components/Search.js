import React, { Component } from 'react';
import axios from 'axios';

export class SearchMovie extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: [],
            searchTerm: ''
        }
        this.apikey = process.env.API_KEY
    }
    handleSubmit = (e) => {
        e.preventdefault();
        axios.get(`https://api.themoviedb.org/3/search/company?api_key=${this.apikey}&page=${this.state.searchTerm}`).then(data => data.json()).then(data => {
            console.log(data);
            this.setState({ movies: [...data.results] })
        }).catch(error => {
            console.log(error);
            this.setState({ errorMessage: 'Error retrieving data' })
        })
    }
    handleChange = (e) => {
        this.setState({ searchTerm: e.target.value })
    }
}

const SearchArea = (props) => {
    return (
        <div className="container">
          <div className="row">
              <div className="col s4 offset-s4">
                  <form action="" onSubmit={props.handleSubmit}>
                      <div className="input-field">
                          <input type="text" placeholder="Search movie" onChange={props.handleChange}/>
                      </div>
                  </form>
              </div>
          </div>
        </div>
    )
}

export default SearchArea;