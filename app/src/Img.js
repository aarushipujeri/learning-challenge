import React from 'react';
import AnswerList from './AnswerList';
import SplitPane from 'react-split-pane';

import Switch from "react-switch";
class ImgComponent extends React.Component {
  
  render() {
    //
    const divStyle = {

      height: '37%',
      width: '100%'
    };
    const ImgStyle = {
      height: '100%',
      width: '95%',
      borderRadius: "8px"
    };
  return (<div style={divStyle}> 
  <img src={require(`./images/${this.props.src}` ) } alt="description" style={ImgStyle} /> 
    </div>  
    );
  }
}

class Img extends React.Component {

  state={
    FilteredImages: [],
    StartTime: new Date().getTime(),
    EndTime: new Date().getTime(),
    ImageDisplay: false,
    ImageNameCount: 0,
    ImageName: '1.jpg',
    ImageSpelling: 'lion',
    ImageInputSpelling: 'Enter Spelling Here',
    data: [],
    answer: [],
    TotalTime: 0.0,
    TotalNumerOfImages: 60,
    loading: false,
    InputReadOnly: false,
    Right: 0,
    Wrong: 0,
    postId: '',
    checked: true


  }
  componentDidMount() {
		this.setState({loading: true})
		fetch('http://100.98.5.47:8080/images')
			.then(data => data.json())
      .then(data => this.setState({data, loading: false}))
    this.setState({FilteredImages: this.state.data})
    this.setState({ImageNameCount: this.state.data.length})
  }
  InputKeyDownImg = (evt) =>{
    if (evt.key === 'Enter') {
     this.GetImageCount()
   }
   
 }
  InputSpellingOnClick = () => {
    return this.setState({ImageInputSpelling: ''})
  }
  InputChangeImage = (evt) => {
    
    //this.state.data[this.state.ImageNameCount + ".jpg"]
    return this.setState({ImageInputSpelling: evt.target.value})
    
  }
  handleChange = (checked) => {
    
    if ( this.state.checked !== false) {
      let data = this.state.data.filter(l => {
        return l.type.toLowerCase().match( "animal" );
      });
      this.setState({TotalNumerOfImages: data.length})
      this.setState({FilteredImages: data})
      console.log(data)
    } else {
      this.setState({FilteredImages: this.state.data})
      this.setState({TotalNumerOfImages: this.state.data.length})
    }

    this.setState({ checked });
    
  }
 
  GetImageCount = () =>{
    this.setState({FilteredImages: this.state.data})
    this.setState({ImageNameCount: this.state.data.length})

    console.log(this.state.ImageName)
    if ( this.state.ImageNameCount < this.state.TotalNumerOfImages){
      
      this.setState({EndTime: new Date().getTime()})
      let timeSec = (this.state.EndTime - this.state.StartTime)/1000
      this.setState({StartTime: this.state.EndTime})
      this.setState({TotalTime: this.state.TotalTime + timeSec})
      let lists = this.state.answer;
      this.setState({answer: []})
      if (this.state.ImageSpelling === this.state.ImageInputSpelling) {
      this.setState({Right: this.state.Right + 1})
      lists.push(this.state.ImageSpelling.toString()+": Correct" + "Time: "+ timeSec.toString() + "Sec")
            
      }else {
        this.setState({Wrong: this.state.Wrong + 1})
        lists.push(this.state.ImageSpelling+": Wrong" + "Time: "+timeSec + "Sec")
      }
      this.setState({answer: lists})
      console.log(this.state.ImageSpelling)
      console.log(this.state.ImageInputSpelling)
      

      this.setState({ImageSpelling: this.state.data[this.state.ImageNameCount ].name})
      this.setState({ImageNameCount: this.state.ImageNameCount +1 })
      this.setState({ImageInputSpelling: ''}) 
      return (
        
        this.setState({ImageName: this.state.FilteredImages[this.state.ImageNameCount].image })
        
        
      )
    } else {
      let avarage=(this.state.TotalTime/this.state.TotalNumerOfImages).toFixed(1)
      this.setState({InputReadOnly: true})
      const requestOptions = {
        method: 'POST',
        headers: { 'Accept': 'application/json','Content-Type': 'application/json' },
        body: JSON.stringify({ "name": this.props.UserName, 
                                "time": avarage,
                                "right": this.state.Right,
                                "wrong": this.state.Wrong})
    };
    fetch('http://100.98.5.47:8080/ranks', 
          requestOptions)
        .then(data => this.setState({ postId: data.id }));

      console.log(this.state.TotalTime/this.state.TotalNumerOfImages)
    }

  }
  render(){
  

    return (
      <React.Fragment>
      <SplitPane key="11" split="vertical" defaultSize="50%" >
        <ImgComponent src={this.state.ImageName} StartTime={this.state.StartTime}/>
        <div>
          <div>
          <label>
        <span>Animals</span>
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </label>
            
          </div>
          <label htmlFor="InputSpelling"> Enter Picture Spelling Here</label>
          <input readOnly={this.state.InputReadOnly} id="InputSpelling" 
          value={this.state.ImageInputSpelling}
          onClick={this.InputSpellingOnClick}
          onChange={this.InputChangeImage}  
          onKeyDown={this.InputKeyDownImg}
          ></input>
          <button onClick={this.GetImageCount}>Next Image</button>
          <AnswerList answers={this.state.answer}/>
         
        </div>
        
        </SplitPane>
      </React.Fragment>
    );
  }
}

export default Img;
