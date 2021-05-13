import React, { useState } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import {Card} from 'react-bootstrap';
import '../styles/Register.css';

export default function Register() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const register = async (e) => {
        e.preventDefault();
        const userData = {name, email, password};
        const answer = await Axios.post(`${process.env.REACT_APP_API_URL}/app/signup`, userData);
        const message = answer.data.message;
        if (message !== 'Welcome') {
            Swal.fire({
                icon: 'error',
                title: message,
                showConfirmButton: false,
                timer: 2500
            })
        } else {
            window.location.href='/login';
            Swal.fire({
                icon: 'success',
                title: 'Successful registered',
                showConfirmButton: false,
                timer: 2500
            })
        }
    }

    return (
        <div className="register-box col s12 m4 l2" >
            <div className="row">
                <Card border="secondary" className="col s12 m4 l2">
                    <form className="form-box col s12 m4 l8" onSubmit={register}>
                    <br/>
                        <label>To get access to all content you need to register first</label>
                        <div className="register-title">
                            <h4>Registration Form</h4>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input placeholder="Name"  type="text" className="form-control" id="name" aria-describedby="" onChange={(e)=>setName(e.target.value)}
                            autoFocus required />
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input placeholder="Email" type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input placeholder="Password" type="password" className="form-control" id="password" onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div className="register-button">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        <br/>
                        <h5>Do you have an account already? <br/><a href="/login"> Login Now</a></h5>
                    <br/>
                    </form>
                </Card>
            </div>
        </div>
        
        
    )
}

