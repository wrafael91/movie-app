import React from 'react'
import '../styles/MainImage.css';

export default function MainImage(props) {
    return (
        <div>
            <div className="hero-image">
                <img src={props.image} alt="hero" />
                <div className="description">
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </div>
            </div>    
        </div>
    )
}
