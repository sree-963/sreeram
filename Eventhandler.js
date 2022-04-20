import React,{useState} from 'react'

export const Eventhandler = () => {
    const [name, setName]=useState(" ");
    const [age, setAge]=useState(" ");
  return (
    <div>
        <center>
           
       <h1> My Name is:  {name} and having the Age:  {age} </h1>
       <label for name='name'>NAME: </label>
            <input type="text" name='name' onChange={(e)=>setName(e.target.value)}/> <br/>
            <label for name='name'>Age      : </label>
             <input type="text" name='name' onChange={(e)=>setAge(e.target.value)}/>
        </center>
    </div>
  )
}
function Abc() {
  const sree= (a) => {
    alert(a);
  }

  return (
    <button onClick={() => sree("Welcome React!")}>Intro</button>
  );
}
export default Abc;