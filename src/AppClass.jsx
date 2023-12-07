import React from "react";
// import "./App.css" 
import elephant from "./images/elephant.jpeg";

export default class AppClass extends React.Component{
  
  

  render(){
    let imgArray = this.props.imageData()
    return(
      <>
        <h1 className='h1'>Kalvium Gallery</h1>
          <div className="grid">
            {/* <img src={imgArray[0].img} alt="" />
            <img src={imgArray[0].img} alt="" />
            <img src={imgArray[0].img} alt="" />
            <img src={imgArray[0].img} alt="" /> */}
            {
              imgArray.map(elem =>{
                return(

                  <img src={elem.img}/>
                )
              })
            }
          </div>
      </>
    )
  }
}