import React from 'react'
import ClassSree from './Clscomp/ClassSree'
import Component from './Component'
import Functionbasedstate from './Functionbasedstate'
// import Clscomp from "./Clscomp/Clscomp";

import { Functioncomponent } from './Functioncomponent'
import Onsubmiteh from './Onsubmiteh'

import Ramu from './Ramu'
import Sree from './Sree'
import Test from './Test'
class App extends React.Component {
  state = {
    name: 'Sri Krishna',
    name1: 'BMW',
    age: 22,
    array: [343, 859, 9588049, 9530],
  }

  render() {
    return (
   <div>
        <center>
          <Component /><ClassSree/>
          <h1> Welcome {this.state.array}</h1> <Onsubmiteh />
          <Sree name={this.state.name} age={this.state.age} />
          <Test name={this.state.name} age={this.state.age} />
          <Ramu /> <Functioncomponent />
          <Functionbasedstate />
        </center></div>
        
        
    )
  }
}
export default App
