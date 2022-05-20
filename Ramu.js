import React,{ useState } from 'react'
import Abc, { Eventhandler } from './Eventhandler';
import Functionprops from './Functionprops';
import Clscomp from './Clscomp/Clscomp';


const Ramu = () => {
   const [data,setData]=useState({
     name:"Sreeram",
     age:22
   });
   const {name,age}=data;
  return (
    <div>
      <Functionprops name={name} age={age}/>
      <Eventhandler/><Clscomp/><Abc/>
      <center> <h1> Name:{name} and having the age {age}</h1></center>
      <h2> Welcome To Hyderabad Mr Pamisetty Sreeram</h2>
      
      </div>
  )
}

export default Ramu;
