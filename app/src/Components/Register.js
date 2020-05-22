import React from 'react'
import C from './Constants.json'
import { Button } from 'react-bootstrap';
class Register extends React.Component {
    state = {
        UserName: '',
        Password: '',
        ConfirmPassword: ''
    }
    OnSubmit = (event) => {
        if (this.state.Password === this.state.ConfirmPassword) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "user": this.state.UserName,
                    "password": this.state.ConfirmPassword,
                    "add20": [],
                    "add40": [],
                    "add60": [],
                    "add80": [],
                    "add100": []
                })
            };

            fetch(C.APIServer + '/users', requestOptions)
                .then((response) => {
                    if (!response.ok) throw new Error(response.status);
                    else alert("Successful Register User: " + this.state.UserName);
                })
            //alert("Successful Register User: " +this.state.UserName)

        } else {
            alert("Paswword Missmatch")
        }
    }
    UsernameClick = (event) => {
        return this.setState({ UserName: '' })
    }
    onChangeUsername = (event) => {
        return this.setState({ UserName: event.target.value })

    }
    PasswordClick = (event) => {
        return this.setState({ Password: '' })
    }
    onChangePassword = (event) => {
        return this.setState({ Password: event.target.value })

    }
    PasswordConfigClick = (event) => {
        return this.setState({ ConfirmPassword: '' })
    }
    onChangePasswordConfig = (event) => {
        return this.setState({ ConfirmPassword: event.target.value })

    }
    render() {
        return (
            <div>
                <div>
                    <h1>Register New User</h1>
                </div>
                <div>
                    UserName <input value={this.state.UserName}
                        type="text"
                        onClick={this.UsernameClick}
                        onChange={this.onChangeUsername}
                    ></input>

                Password <input value={this.state.Password}
                        type="password"
                        onClick={this.PasswordClick}
                        onChange={this.onChangePassword}
                    ></input>

                Confirm Password <input value={this.setState.ConfirmPassword}
                        type="password"
                        onClick={this.PasswordConfirmClick}
                        onChange={this.onChangePasswordConfig}
                    ></input>
                    <Button variant="primary"
                        size="lg"
                        onClick={this.OnSubmit}
                        active>Register</Button>
                </div>
            </div>
        )
    }
}

export default Register