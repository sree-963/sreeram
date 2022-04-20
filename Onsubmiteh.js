import React,{useState} from 'react'

const Onsubmiteh = () => {
    const [data,setData]=useState({
        email:" ",
        password:" "
    })
    const changeHandler= e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler= e =>{
        e.preventDefault();
        if(data.password.length < 8){

            alert("Password Must Provide Atleast 8 Characters")
        }
        
        
        else{ 
            document.write(JSON.stringify(data))
        }
    } 
    
  return (
    <div> <center> <form onSubmit={submitHandler }>
        <label  style={{fontSize:"40px"}}>Email:</label>
        <input type="email" className="form-control" style={{fontSize:"20px", width:"300px", height:"30px"}} onChange={changeHandler} name='email' ></input>
        <label style={{fontSize:"40px"}}>Password:</label>
        <input type="password" className="form-control" style={{fontSize:"40px", width:"300px", height:"30px"}} onChange={changeHandler} name='password'></input><br/>
        <input type="submit" className='btn btn-primary'  style={{ width:"100px", height:"40px", fontSize:"20px",marginBottom:"20px"}} value="LOGIN"></input><br/>
        </form></center>
        </div>
  )
}

export default Onsubmiteh;