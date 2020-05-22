import React from "react";
import { Button } from 'react-bootstrap';
//import C from './Constants.json'

import './css/login.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import * as Icon from 'react-feather';
import { Nav } from 'react-bootstrap'
import Regisster from './Register'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false,
            Username: 'Please Enter Username Here',
            Password: 'Please Enter Password Here',

        }
    }

    /* componentDidMount=()=>{
         
         console.log(C.APIServer)
         fetch(C.APIServer +'/users')
         .then(response => response.json())
         .then(data => this.setState({ data }));
         console.log("mounted")
     }*/
    handleChange = (event) => {
        return this.setState({ Username: event.target.value })


    }

    handleSubmit = (event) => {
        console.log("in change handle")

    }
    UsernameClick = (event) => {
        //this.setState({Username: ''})
        return this.setState({ Username: '' })
        //console.log(this.state.Username)
        //this.setState({Username: event.target.value})

    }
    HandleClickPassword = (event) => {
        //this.setState({Username: ''})
        console.log(this.state.Username)

    }
    onChangeUsername = (event) => {
        return this.setState({ Username: event.target.value })

    }
    onChangePassword = (event) => {
        return this.setState({ Password: event.target.value })

    }
    submit = (event) => {
        console.log("logedin");
        for (const [index, value] of this.props.userData.entries()) {
            console.log(this.state.Username + " user: " + value.user)
            console.log(this.state.Password + " password: " + value.password)
            if (this.state.Username === value.user &&
                this.state.Password === value.password) {
                this.props.auth(true)
                this.props.username(this.state.Username)
                return
            }
        }
        alert("Username or Password  not matching ")
    }
    render() {
        return (
            <Router>

                <Nav>

                    <Link to="/login"><Icon.LogIn />Login</Link>

                    <Link to="/register"><Icon.UserPlus /> Register</Link>

                </Nav>
                <Switch>
                    <Route path="/login">
                        <div>
                            Username: <input value={this.state.Username} type="text"
                                onClick={this.UsernameClick}
                                onChange={this.onChangeUsername} />

                Password: <input value={this.state.Password} type="password"
                                onClick={this.HandleClickPassword} onChange={this.onChangePassword} />
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={this.submit}
                                active>Login</Button>

                        </div>

                    </Route>
                    <Route path="/register">
                        <Regisster />
                    </Route>

                </Switch>
            </Router>
        )
    }
}

export default Login