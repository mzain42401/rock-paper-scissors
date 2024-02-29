import React, { useState } from 'react'
import Btn from './components/Btn.js';
const App = () => {
  const [color,setcolor]=useState(false)
  const [icon,setIcon]=useState(false)

  const theme=()=>{
    setcolor(!color)
    setIcon(!icon)
  }
  return (
    <>
    <div className={`h-[100vh] w-full ${color?'bg-[#1b1b1f]':"bg-[#fff]"}`}>

   
      

    <Btn theme={theme} icon={icon}/>
    </div>

    </>
  )
}

export default App
