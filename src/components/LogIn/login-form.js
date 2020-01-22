import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('handleSubmit')
        const user = {
            User_Name: this.state.username,
            Password: this.state.password
        }

        console.log(user)
        fetch('http://localhost:8080/login', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            
            body: JSON.stringify(user),
        }).then(res => res.json()).then(response => {
            console.log('login response: ')
            console.log(response)
            // window.location = "http://localhost/"
        }).catch(error => {
            console.log('login error: ')
            console.log(error);

        })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    <h4 className="new">Login</h4>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="username">Username</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password">Password: </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-7"></div>
                            <button
                                className="yoo"
                                onClick={this.handleSubmit}
                                type="submit">Login</button>
                        </div>
                        <Link to="/sign-up">
                            <p>don't have an account?</p>
                        </Link>
                    </form>
                </div>
            )
        }
    }
}

export default LoginForm
