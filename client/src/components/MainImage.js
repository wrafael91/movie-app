import React from 'react'

export default function MainImage(props) {
    return (
        <div>
            <div>
                <img src={props.image} alt="hero"
                style={{
                background:`linear-gradient(to bottom, rgba(0,0,0,0)
                39%, rgba(0,0,0,0)
                41%, rgba(0,0,0,0.65)
                100%),
                url(''), #1c1c1c`,
                height: '550px',
                backgroundSize: '100%, cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '100%',
                position: 'relative'
            }}
            />

                <div style={{position:'absolute', maxWidth:'500px', bottom:'2rem', marginLeft:'2rem',
                background: 'rgba(32, 32, 32, 0.7)', backgroundPosition: 'center', padding:'25px'
                }}>
                    <h2 style={{color: 'white'}}>{props.title}</h2>
                    <span style={{color: 'white'}}>{props.year}</span>
                    <p style={{color: 'white', fontSize: '1rem'}}>{props.text}</p>
                </div>

            </div>
            
        </div>
    )
}
