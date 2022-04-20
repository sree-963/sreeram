import React from 'react'

const Img = (props) => {
  return (
    <div style={{display:"inline"}}>
        <img src={props.src}  width={200} height={200}/>
    </div>
  )
}

export default Img;