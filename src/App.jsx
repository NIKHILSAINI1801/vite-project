import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar'
import Header from './components/header/header';
import Bulb from './components/bulb/bulb';
import MyForm from './components/form/form';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/pages/home/home';
import Contact from './components/pages/contact/contact';
const App = () => {

  useEffect
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
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<contact/>}/>
    </Routes>
    </BrowserRouter>
    <>
      <Contact/>
        <Bulb />
        <MyForm />
      </></>
  )
}
export default App
