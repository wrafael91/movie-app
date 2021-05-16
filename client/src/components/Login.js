import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Axios from 'axios';
import Swal from 'sweetalert2';
import {Card} from 'react-bootstrap';
import '../styles/Login.css'

export default function Login() {

    let history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const login = async (e) => {
        e.preventDefault();
        const userData = {email, password};
        const answer = await Axios.post(`${process.env.REACT_APP_API_URL}/app/login`, userData);
        const message = answer.data.message;
        if (message !== 'Welcome') {
            Swal.fire({
                icon: 'error',
                title: message,
                showConfirmButton: false,
                timer: 2500
            })
        } else {
            const token = answer.data.token;
            const name = answer.data.name;
            const iduser = answer.data.id;
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('name', name);
            sessionStorage.setItem('iduser', iduser);
            window.location.href='/home';
            Swal.fire({
                icon: 'success',
                title: message,
                showConfirmButton: false,
                timer: 2500
            })
        }
    }

    return (
        <div className="login-box col s12 m4 l2">
            <div className="row">
                <Card border="secondary" className="col s12 m4 l2">
                <br/>
                    <form className="form-box col s12 m4 l8" onSubmit={login}>
                        <div className="login-title">
                            <h4>Login Form</h4>
                        </div>
                        <div className="form-group">
                            <br/>
                            <label htmlFor="name">Email</label>
                            <input 
                            placeholder="Email" 
                            id="email"
                            className="form-control" 
                            type="email" 
                            onChange={(e)=>setEmail(e.target.value)}
                            autoFocus required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                            placeholder="Password" 
                            id="password" 
                            type="password" 
                            className="form-control" 
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                        <div className="login-button">
                            <button type="submit" className="btn btn-success">Login</button>
                        </div>
                        <br/>
                        <div className="enroll-now">
                            <h5>Haven't registered yet? <Link to="/signup"> Enroll now</Link></h5>
                        </div>
                    <br/>
                    </form>
                </Card>
            </div>
        </div>
    )
}
    

