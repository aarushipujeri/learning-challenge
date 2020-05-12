import React, { Component } from "react";
import Switch from "react-switch";
 
class FilterImages extends Component {
  constructor() {
    super();
    this.state = { checked: true };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ checked });
    let data = this.props.images.filter(l => {
      return l.type.toLowerCase().match( "animal" );
    });
    console.log("data"+data)
  }
 
  render() {
    return (
      <label>
        <span>Animals</span>
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </label>
    );
  }
}

export default FilterImages;