import React from 'react'
import Eventalert from './Eventalert';
import Img from './Img';

const Functionprops = (props) => {
  return (
   
    <div>
     
      { arr.map((item,index)=><Img  key={index} src={item}/>)}
      <h1 style={{color:"blue", backgroundColor:"yellowgreen", marginRight:'60px',border:"5px solid red", borderBottomLeftRadius:"50px",borderBottomRightRadius:"50px"}}>My Name is {props.name} and With an Age of {props.age}</h1>
    <Eventalert/>
   
    </div>
  )
}
const arr=[
  "https://www.exoticindiaart.com/images/products/original/sculptures-2016/zej12.webp",
  "https://m.media-amazon.com/images/I/71xOmg5P0+L._SL1500_.jpg",
 " https://media.istockphoto.com/illustrations/krishna-janmashtami-digital-art-illustration-annual-hindu-festival-in-illustration-id1225765816?s=612x612",
 "https://m.media-amazon.com/images/I/61ZKNRIYpsL._SL1200_.jpg",
 "https://cpimg.tistatic.com/06801490/b/4/Beautiful-Marble-Krishna-Statue-For-Temple.jpg",
 "https://5.imimg.com/data5/AE/CF/YI/SELLER-7217525/marble-krishna-statue-500x500.jpg"
]
export default Functionprops;