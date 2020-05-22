import React from 'react';
import C from './Components/Constants.json'
import NavBar from './Components/NavBar'
//import './App.css';
import Login from './Components/Login'


class  App extends React.Component{
  state ={
    Authenticated: false,
    username: '',
    userData: {}
  }
  componentDidMount=()=>{
        
    console.log(C.APIServer)
    fetch(C.APIServer +'/users')
    .then(response => response.json())
    .then(data => this.setState({ userData: data }));
    console.log("mounted App")
}
  getUserData=()=>{
    return this.state.userData
  }
  SetUserName = (username) =>{
    this.setState({username: username})
  }

  SetAuthentication=(value)=>{
    this.setState({Authenticated: value})
  }
  render () {
    return (
      <div className="App">
      
        {this.state.Authenticated ? <NavBar 
                                      username={this.state.username}
                                      userData={this.state.userData}
                                      getUserData={this.getUserData}
                                        /> : 
                                    <Login  username={this.SetUserName}
                                      auth={this.SetAuthentication}
                                      userData={this.state.userData}
                                      />}
      </div>
    );
  }
  
}

export default App;
