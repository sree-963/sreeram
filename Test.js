import React from "react";
class Test extends React.Component{
    render(){
        var mystyle={
             fontSize:40,
             border:"5px solid red",borderTopLeftRadius:"60px",
             marginRight:"50px",
             borderBottomRightRadius:"60px",backgroundColor:"rgb(05,97,10)",color:"white"
        }
        return (
            <div>
                <center>
                    <h3 style={mystyle}> MY NAME: {this.props.name} With An Age Of {this.props.age}</h3>
                </center>
            </div>
        )
    }
}
export default Test;