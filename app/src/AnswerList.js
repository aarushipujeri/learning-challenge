import React from 'react';
import './index.css';
class AnswerList extends React.Component {
    //            const loginButton = document.getElementById('ans');
    state={
        ans: [],

    }

    render(){
      const divStyle = {
        backgroundColor:'lightblue',
        color: 'blue',
        overflowY: 'scroll',
        height: '200px',
        width: '100%'
      };
        return(
            <div  style={divStyle}>
          <ol >
          {
            this.props.answers.map(answer =>  {
              return (
                <li   key={answer} >{answer}</li>
              )
            })
            }
          </ol>
          </div>
        )
        
    }
}

export default AnswerList;