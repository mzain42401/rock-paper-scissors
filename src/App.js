import React, { useState } from 'react'
import Top from "./components/Top.js";
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

   <Top theme={theme} icon={icon}/>
      <div className={`text-3xl text-center select-none  mt-10 ${color?"text-white":"text-[#1b1b1f]"}`}>
        <div>Round</div>
        <div className='text-4xl font-semibold select-none '>10</div>
      </div>

    <Btn/>
    </div>

    </>
  )
}

export default App
