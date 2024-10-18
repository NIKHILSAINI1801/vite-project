import React, { useState } from 'react';
import Navbar from './components/navbar'
import Header from './components/header/header';
import Bulb from './components/bulb/bulb';
const App = () => {
  const [color, setColor]=useState("yellow")
  const [colorState,setColorState]=useState(false)
  const changeColor=(color)=>{
    if(colorState){
      setColor('red')
      setColorState(false)
    }
    else{
      setColor('yellow')
      setColorState(true)
    }
  }
  return (
    <><div>
      <h1 style={{ color: color }}>My fav color is {color}</h1>
      <button onClick={changeColor}>Change Color</button>
    </div><>
        <Bulb />
      </></>
  )
}
export default App
