import React, { useState } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';

export default function Register() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const register = async (e) => {
        e.preventDefault();
        const userData = {name, email, password};
        const answer = await Axios.post('http://localhost:5000/app/signup', userData);
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
        <div className="row">
            <div className="col s12 m4 l2"><p></p></div>
            <form className="col s12 m4 l8" onSubmit={register}>
                <h4>Registration Form</h4>
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
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="col s12 m4 l2"><p></p></div>
        </div>
        
    )
}

