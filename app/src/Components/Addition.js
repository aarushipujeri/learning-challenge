import React from 'react'
import { Button } from 'react-bootstrap';
import 'react-rangeslider/lib/index.css'
import Slider from 'react-rangeslider'
import C from './Constants.json'
import Moment from 'moment';
//import './css/login.css'

//import 'react-splitter-layout/lib/index.css';
//import SplitPane, { Pane } from 'react-split-pane';

class Addition extends React.Component {
    state = {
        StartTime: new Date(),
        EndTime: new Date(),
        TotalTime: 0,
        RandomRange: 20,
        NumOfProblems: 5,
        Count: 0,
        Num1: Math.floor(Math.random() * 10) + 1,
        Num2: Math.floor(Math.random() * 10) + 1,
        UserTotal: '',
        labels: { 0: '0', 20: '20', 40: '40', 60: '60', 80: '80', 100: '100' }
    }
    UpdateDB = () => {
        var addR
        switch (this.state.RandomRange) {
            case 20:
                console.log(" switch 20")
                let m20 = Moment().format('YYYY-MM-DD')
                addR = { "add20": { "date": m20.toString(), "score": this.state.TotalTime } }
                break
            case 40:
                console.log(" switch 40")
                let m40 = Moment(new Date()).format('YYYY-MM-DD')
                addR = { "add40": { "date": m40.toString(), "score": this.state.TotalTime } }
                break
            default:
                console.log("Wroung range: " + this.state.RandomRange)

        }
        console.log(addR)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "user": this.props.username,
                "addition": addR
            })
        };
        fetch(C.APIServer + '/userUpdate', requestOptions)
            .then((response) => {
                if (!response.ok) throw new Error(response.status);
                else alert("Successful uploaded score : " + this.state.TotalTime);
            })
    }
    componentDidMount = () => {
        this.setState({ StartTime: new Date() })
        console.log("mounted")
    }
    componentWillUnmount() {
        console.log("unmount")
    }
    OnRandomRangeChange = (value) => {
        console.log(" Random range before:" + this.state.RandomRange)
        this.setState({
            RandomRange: value
        })
        console.log(" Random range:" + this.state.RandomRange)
        this.setState({ StartTime: new Date() })
        this.setState({ Num1: Math.floor(Math.random() * this.state.RandomRange) + 1 })
        this.setState({ Num2: Math.floor(Math.random() * this.state.RandomRange) + 1 })

    }
    handleChange = (event) => {
        return this.setState({ UserTotal: event.target.value })


    }
    OnSubmit = (event) => {
        if (this.state.Count < this.state.NumOfProblems) {

            this.setState({ EndTime: new Date() })
            let start = this.state.EndTime.getTime()
            let end = this.state.StartTime.getTime()
            let timeDiff = (start - end) / 1000
            let total = this.state.Num1 + this.state.Num2
            console.log(total)
            console.log(this.state.UserTotal)
            if (parseInt(total) === parseInt(this.state.UserTotal)) {
                console.log("correct " + timeDiff + "sec")
            } else {
                console.log("wrong " + timeDiff + "sec")
            }
            this.setState({ StartTime: new Date() })
            this.setState({ Num1: Math.floor(Math.random() * this.state.RandomRange) + 1 })
            this.setState({ Num2: Math.floor(Math.random() * this.state.RandomRange) + 1 })
            this.setState({ UserTotal: '' })
            this.setState({ Count: this.state.Count + 1 })
            this.setState({ TotalTime: timeDiff + this.state.TotalTime })
        } else {
            this.UpdateDB()
        }
    }
    OnClickTotal = (event) => {
        return this.setState({ UserTotal: '' })
    }
    onChangeTotal = (event) => {
        return this.setState({ UserTotal: event.target.value })
    }
    handleKeyPress = (event) => {

        if (event.key === 'Enter') {
            if (this.state.Count < this.state.NumOfProblems) {
                this.setState({ EndTime: new Date() })
                let start = this.state.EndTime.getTime()
                let end = this.state.StartTime.getTime()
                let timeDiff = (start - end) / 1000
                let total = this.state.Num1 + this.state.Num2
                console.log(total)
                console.log(this.state.UserTotal)
                if (parseInt(total) === parseInt(this.state.UserTotal)) {
                    console.log("correct " + timeDiff + " sec")
                } else {
                    console.log("wrong " + timeDiff + " sec")
                }
                this.setState({ Num1: Math.floor(Math.random() * this.state.RandomRange) + 1 })
                this.setState({ Num2: Math.floor(Math.random() * this.state.RandomRange) + 1 })
                this.setState({ UserTotal: '' })
                this.setState({ Count: this.state.Count + 1 })
                this.setState({ TotalTime: timeDiff + this.state.TotalTime })
            } else {
                this.UpdateDB()

            }
        }
    }
    render() {



        return (
            <div>
                <div >

                    <Slider
                        onChange={this.OnRandomRangeChange}
                        labels={this.state.labels}
                        orientation="horizontal"
                        value={this.state.RandomRange}
                        step={20}
                        max={100} />

                </div>

                <div >

                    <h1> {this.state.Num1} + {this.state.Num2} </h1>

                    <input type="text" value={this.state.UserTotal} onKeyPress={this.handleKeyPress} onClick={this.OnClickTotal}
                        onChange={this.onChangeTotal}
                    ></input>
                    <Button onClick={this.OnSubmit}>Submit</Button>

                </div>

            </div>

        )
    }
}

export default Addition;

