import React from 'react'

function GridCard(props) {
    return (
        <div className="col s12 m6 l3">
            <div className="card" style={{marginBottom: '2em', width: '12rem'}}>
                <ul className="list-group" style={{listStyle: 'none'}}>
                    <a href={`/movie/${props.movieId}`}>
                        <li key={props.id} >
                            <img style={{width:'100%', height:'300px'}} alt="img" src={props.image}/>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default GridCard
