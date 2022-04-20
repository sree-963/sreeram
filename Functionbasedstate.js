import React,{useState} from 'react'

const Functionbasedstate = () => {
    const [name, setName]=useState('Sreeram')
  return (
    <div><h1> Name:{name}</h1></div>
  )
}

export default Functionbasedstate;