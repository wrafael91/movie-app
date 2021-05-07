import React from 'react';
import '../styles/GridMovies.css';

function GridCard(props) {
    if (props.actor) {
        return(
            <div className="col">
                <div className="actor-card">
                    <ul className="list-group" style={{listStyle: 'none', padding: '0'}}>                     
                        <li key={props.id} >
                            <img style={{width:'12rem', height:'300px', margin: '0'}} alt={props.original_title} src={props.image}/>
                        </li>
                        <span>{props.actor}</span>
                        <br/>
                    </ul>
                </div>
            </div>
        )
    } else {
        return (
        <div className="col">
            <div className="" >
                <ul className="list-group" style={{listStyle: 'none'}}>
                    <li key={props.id} >
                        <a href={`/movie/${props.movieId}`}>
                            <img style={{width:'12rem', height:'300px', marginBottom:'30px'}} alt="img" src={props.image}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
    }
    
}

export default GridCard
