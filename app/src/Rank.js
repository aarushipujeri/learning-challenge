import React from 'react';

class Rank extends React.Component {
    state={
        data: [],
        loading: false
    }
    componentDidMount() {
		this.setState({loading: true})
		fetch('http://100.98.5.47:8080/ranks')
			.then(data => data.json())
      .then(data => this.setState({data, loading: false}))
  }

    render(){
        return (
    
            
            <div key="r2">
                <div key="r1">
                <h1>Top Scorers</h1>
                </div>
                 <ul width="100%">
                 <div key="r3">
            {this.state.data.map((rank,index)=> {
                return (
                    
                        
                       
                <li key={index} >{rank.name} Time: {rank.time} right: {rank.right} Wrong: {rank.wrong}</li>
                    
                )
            }
            
            )}
            </div>

            </ul>
        </div>
            
        )
    }
}

export default Rank;