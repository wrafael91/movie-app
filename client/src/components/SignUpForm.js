import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            fullname: '',
            username: '',
            email: '',
            password: ''
        }
        this.changeFullName = this.changeFullName.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    changeFullName(event){
        this.setState({
            fullname: event.target.value
        })
    }
    changeUsername(event){
        this.setState({
            username: event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email: event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password: event.target.value
        })
    }

//Sending information to server
    onSubmit(event){
        event.preventDefault();

        const registered = {
            fullname: this.state.fullname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:4000/app/signup', registered)
        .then(response => console.log(response.data));

        this.setState({
            fullname: '',
            username: '',
            email: '',
            password: ''
        })
    }

    render() {
        return(
            <div className="container">
                <br/>
                <div className="row">
                    <div className="col s12 m4 l2"><p></p></div>
                    <form className="col s12 m4 l8" onSubmit={this.onSubmit}>
                        <h4>Registration Form</h4>
                        <div className="row">
                            <div className="">
                                <input 
                                placeholder="Fullname" 
                                id="fullname" 
                                type="text" 
                                class="validate" 
                                onChange={this.changeFullName} 
                                value={this.state.fullname}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="">
                                <input 
                                placeholder="Username" 
                                id="username" 
                                type="text" 
                                class="validate" 
                                onChange={this.changeUsername} 
                                value={this.state.username}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="">
                                <input 
                                placeholder="Email" 
                                id="email" 
                                type="email" 
                                class="validate" 
                                onChange={this.changeEmail} 
                                value={this.state.email}
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
                                onChange={this.changePassword} 
                                value={this.state.password}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <input type="submit" className="waves-effect waves-light btn" value="Submit"/>
                            </div>
                        </div>
                    </form>
                    <div className="col s12 m4 l2"><p></p></div>
                </div>
            </div>
        );
    }
}

export default SignUp;