import React from "react";
import * as Icon from 'react-feather';
import Auth from "./Auth"
import Rank from './Rank';
import MathsIcons from './MathsIcons';
import Row from 'react-row'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  useEffectOnce,
  useLockBodyScroll,
  useWindowSize,
  useLocalStorage,
} from 'react-use';

const activeNavIcon = (path) => ({
  style: {
    stroke: window.location.pathname === path ? '#4c75f2' : '',
  },
});

class App extends React.Component {

   state={
     LoggedIn: false
   }
   render(){

  return (
    <React.Fragment>
    <Router>
      <div>
        <nav>
        <Row color="red" background-color="blue" color_xs="blue">{{
          1: <Link to="/"><Icon.Home {...activeNavIcon('/')} /></Link>,
          2: <Link to="/Ranks"><Icon.Star {...activeNavIcon('/Ranks')} /></Link>,
          3: <Link to="/substraction"><Icon.Minus {...activeNavIcon('/substraction')} /></Link>,
          4: <Link to="/addition"><Icon.Plus {...activeNavIcon('/addition')} /></Link>,
          5: <Link to="/multiplication"><Icon.X {...activeNavIcon('/multiplication')} /></Link>,
          6: <Link to="/division"><Icon.Divide {...activeNavIcon('/division')} /></Link>,
          }}</Row>

        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            
        <Switch>
          <Route path="/multiplication">
            <h1>Multiplication</h1>
          </Route>
          <Route path="/division">
            <h1>Multiplication</h1>
          </Route>
          <Route path="/substraction">
            <h1>ubstraction</h1>
          </Route>
          <Route path="/addition">
            <h1>addition</h1>
          </Route>
          <Route path="/Ranks">
            <Rank />
          </Route>
          <Route path="/spelling">
            <h1>spelling</h1>
          </Route>

          <Route path="/">
            <Auth login={ this.state.LoggedIn}/>
          </Route>
        </Switch>
      </div>
    </Router>
          <h1>{this.state.LoggedIn}</h1>
    </React.Fragment>
      
    );
   }
}

export default App;