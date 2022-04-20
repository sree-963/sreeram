import React from 'react';
import './App.css';

 class Sree extends React.Component{
  render(){
    let style1={
      color:'red',
      backgroundColor:"yellow",
      border:"6px solid blue",
      marginRight:"100px"
    }
    return(
      <div>
        <center>
          <h1 style={style1}> Name: {this.props.name} and Age Having {this.props.age}</h1>
        </center>
      </div>
    )
  }
}
  
  export default Sree;
  