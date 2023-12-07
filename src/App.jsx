import React from 'react';
import './App.css';
import elephant from "./images/elephant.jpeg";



function App(props) {
  let imgArray = props.imageData()
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

export default App;