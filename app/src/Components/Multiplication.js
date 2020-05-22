import React from 'react'
import { Button } from 'react-bootstrap';
import 'react-rangeslider/lib/index.css'
import Slider from 'react-rangeslider'
class Multiplication extends React.Component {
    state={
        RandomRange: 10,
        NumOfProblems: 10,
        Num1: Math.floor(Math.random() * 10) + 1,
        Num2: Math.floor(Math.random() * 10) + 1,
        UserTotal: '',
        labels: { 0: '0', 5: '5', 10: '10', 15: '15', 20: '20'}
    }
    OnRandomRangeChange = (value)=>{
        
        this.setState({
            RandomRange: value
          })
          console.log(" Random range:" + this.state.RandomRange)
        this.setState({Num2: Math.floor(Math.random() * 10) + 1})
        this.setState({Num1: Math.floor(Math.random() * this.state.RandomRange) + 1})

    }
    handleChange=(event)=> {
        return this.setState({UserTotal: event.target.value})
        

      }
    OnSubmit=(event)=>{
        
        let total=this.state.Num1 * this.state.Num2
        console.log(total)
        console.log(this.state.UserTotal)
        if ( parseInt(total) === parseInt(this.state.UserTotal)) {
            console.log("correct")
        } else {
            console.log("wrong")
        }
    }
    OnClickTotal=(event)=>{
        return this.setState({UserTotal: ''})
    }
    onChangeTotal = (event) =>{
        return this.setState({UserTotal: event.target.value})
    }
    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            let total=this.state.Num1 * this.state.Num2
        console.log(total)
        console.log(this.state.UserTotal)
        if ( parseInt(total) === parseInt(this.state.UserTotal)) {
            console.log("correct")
        } else {
            console.log("wrong")
        }
        this.setState({Num2: Math.floor(Math.random() * 10) + 1})
        this.setState({Num1: Math.floor(Math.random() * this.state.RandomRange) + 1})
        this.setState({UserTotal: ''})
          
        }
      }
    render() {
        
        

      return (
      <div>
           <div>
               <Slider 
               onChange={this.OnRandomRangeChange}
                labels={this.state.labels}
                orientation="horizontal" 
                value={this.state.RandomRange} 
                step={5} 
                max={20}/>
           </div>
          <div>
          <h1> {this.state.Num1} X {this.state.Num2} </h1>
          </div>
          <div>
          <input type="text" value={this.state.UserTotal} onKeyPress={this.handleKeyPress} onClick={this.OnClickTotal} 
                onChange={this.onChangeTotal}
                ></input>
          <Button onClick={this.OnSubmit}>Submit</Button>
          </div>
          </div>
      )
    }
  }

export default Multiplication;

