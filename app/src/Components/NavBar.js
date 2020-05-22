import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as Icon from 'react-feather';
import Addition from './Addition'
import Multiplication from './Multiplication'
import Division from './Division'
import Score from './Score'
import {Nav} from 'react-bootstrap'
class NavBar extends React.Component {
  render() {

  return (
    <Router>
      <div>
        <Nav>
        
              <Link to="/"><Icon.Home/></Link>
           
              <Link to="/Addition"><Icon.Plus/></Link>
            
              <Link to="/Multiplication"><Icon.X/></Link>
            
              <Link to="/Division"><Icon.Divide/></Link>
            
              <Link to="/Score"><Icon.Activity/></Link>
           
        </Nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Addition">
            <Addition username={this.props.username} userData={this.props.userData}/>
          </Route>
          <Route path="/Multiplication">
            <Multiplication />
          </Route>
          <Route path="/Division">
            <Division />
          </Route>
          <Route path="/Score">
            <Score />
          </Route>
          <Route path="/">
            <Score username={this.props.username} userData={this.props.userData}
             getUserData={this.props.getUserData}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
}

export default  NavBar