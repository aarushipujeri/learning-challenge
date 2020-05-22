import React from 'react';
import Img from './Img';

class Auth extends React.Component {
  state = {
   //loggedIn: false,
    UserName: 'Enter Your Name',
    InputReadOnly: false,
    StartTime: new Date(),
    EndTime: new Date()
  }
  
  logIn = () => {
    if (this.state.UserName !== '' && this.state.UserName !== 'Enter Your Name') {
      //this.setState({loggedIn: true})
      this.props.loggedIn= true
      const logoutButton = document.getElementById('logout');
      logoutButton.style.display = 'inline';
      const loginButton = document.getElementById('login');
      loginButton.style.display = 'none';
      console.log(this.state.UserName)
      this.setState({InputReadOnly: true})
    }else {
      console.log("Please Enter Username")
    }
  }
  logOut = () => {
    //this.setState({loggedIn: false})
    this.props.loggedIn=false
    const loginButton = document.getElementById('login');
    loginButton.style.display = 'inline';
    const logoutButton = document.getElementById('logout');
    logoutButton.style.display = 'none';
  }
  InputClick =  () =>{
    if (this.props.loggedIn === false) {
      return this.setState({UserName: ''})
    }
    
  }
  InputChange = (evt) => {
    
    return       this.setState({UserName: evt.target.value})
  }
  InputKeyDown = (evt) =>{
     if (evt.key === 'Enter') {
       this.setState({StartTime: new Date()})
      this.logIn()
    }
    
  }
  render(){
  


    return (
      <div>
        <div>
          
          <div>
            <label htmlFor="username">Enter Your Name: </label>
            <input  readOnly={this.state.InputReadOnly} id="username" 
            value={this.state.UserName} 
                onClick={this.InputClick} 
                onChange={this.InputChange} 
                onKeyDown={this.InputKeyDown}
                ></input>
          </div>
          <button onClick={this.logIn} id="login" >Login</button>
          <button onClick={this.logOut} id="logout" >LogOut</button>

          
   
          {this.props.loggedIn ? <Img UserName={this.state.UserName} /> : ""}
          
        </div>
      </div>
    
    )
  }
}

export default Auth;
