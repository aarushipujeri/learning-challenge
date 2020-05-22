import React, {  Component } from 'react';
import C from './Constants.json'
import LineChart, { parseGroupingBy } from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';
export default class Score extends Component {
  state = {
    
    UserData: {},
    isLoading: true,
  }
  componentDidMount = () => {
    console.log(C.APIServer)
    fetch(C.APIServer + '/users')
      .then(response => response.json())
      .then(data => {
        for (const [index, value] of data.entries()) {
          if (this.props.username === value.user) {
            this.setState({ UserData: value.add20 ,isLoading: false})
          }
        }
      })

    console.log("mounted Score")
  }
  render() {
    return (
      <div>
        {!this.state.isLoading ?
          <div className="App">
            <h1>My First LineChart</h1>
            <LineChart
              isDate={true}
              width={600}
              height={400}
              data={parseGroupingBy(this.state.UserData, "date", "score")}
            />
          </div>
          : (
            <h3>Loading...</h3>
          )}


      </div>
    );
  }
}