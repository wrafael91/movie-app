import React, { useState } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';

export default function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const login = async (e) => {
        e.preventDefault();
        const userData = {email, password};
        const answer = await Axios.post('http://localhost:5000/app/login', userData);
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
            window.location.href='/index';
            Swal.fire({
                icon: 'success',
                title: message,
                showConfirmButton: false,
                timer: 2500
            })
        }
    }

    return (
        <div className="container">
            <br/>
            <div className="row">
                <div className="col s12 m4 l2"><p></p></div>
                <form className="col s12 m4 l8" onSubmit={login}>
                    <h4>Login Form</h4>
                    <div className="row">
                        <div className="">
                            <input 
                            placeholder="Email" 
                            id="email" 
                            type="email" 
                            onChange={(e)=>setEmail(e.target.value)}
                            autoFocus required 
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="">
                            <input 
                            placeholder="Password" 
                            id="password" 
                            type="password" 
                            class="validate" 
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <input type="submit" className="waves-effect waves-light btn" value="Login"/>
                        </div>
                    </div>
                </form>
                <div className="col s12 m4 l2"><p></p></div>
            </div>
        </div>
    )
}
    

