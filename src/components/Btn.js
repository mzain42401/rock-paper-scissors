import React, { useState } from 'react'
import userPaper from '../images/paper2.png'
import userrock from '../images/rock2.png'
import userscissor from '../images/scissors2.png'
import pcscissor from '../images/scissors1.png'
import pcrock from '../images/rock1.png'
import pcPaper from '../images/paper1.png'
import rock from '../images/rock-user.png'
import paper from '../images/paper-user.png'
import scissors from '../images/scissors-user.png'
import useSound from 'use-sound';
import clicksound from "../sound/clicksound.mp3"
import winsound from "../sound/winner.mp3"

import { LuRefreshCcw } from "react-icons/lu";
import { MdDarkMode,MdLightMode } from "react-icons/md";
import Swal from 'sweetalert2'




const Btn = ({theme,icon}) => {
  const [playSound] = useSound(clicksound);
  const [winplay] = useSound(winsound);

const [round,setround]=useState(0)
const [user,setuser]=useState(0)
const [pc,setPc]=useState(0)
const [draw,setDraw]=useState(0)
const [userImag,setUserImg]=useState(userPaper)
const [pcImg,setPcImg]=useState(pcPaper)
const [userwin,setuseWin]=useState(null)
const [pcwin,setpcwin]=useState(null)







const pcArry=[pcPaper,pcrock,pcscissor]


// refresh 

const refresh=()=>{
  setuser(0)
  setround(0)
  setPc(0)
  setDraw(0)
  setUserImg(userPaper)
  setPcImg(pcPaper)
}

// click 

  const play=(myclick)=>{ 

    playSound()
    setround(round + 1)
    
    const pcselect =pcArry[Math.floor(Math.random() * 3)]
    const mySelect = myclick
    
    
    setUserImg(mySelect)
    setPcImg(pcselect)


    calculateResult(mySelect, pcselect);
   
  }
  
  const calculateResult=(mySelect, pcselect)=>{
    
    if ((mySelect === userPaper && pcselect === pcPaper) || (mySelect=== userrock && pcselect === pcrock) || (mySelect===userscissor && pcselect === pcscissor) ) {
      setDraw(draw => draw + 1);
    } else if (
      (mySelect === userrock && pcselect === pcscissor) ||
      (mySelect === userPaper && pcselect === pcrock) ||
      (mySelect === userscissor && pcselect === pcPaper)
    ) {
      setuser(user + 1);

setuseWin(true)
setpcwin(false)



    } else {
      setPc(pc + 1);
      setuseWin(false)
setpcwin(true)
    }
    if (user >= 9) {
      winplay()
      Swal.fire({
        icon: "success",
        title: "Excellent!...",
        text: "You've won the game.",
      });
      setuser(0)
      setround(0)
      setPc(0)
      setDraw(0)
      setUserImg(userPaper)
      setPcImg(pcPaper)
    }
    else if (pc >=9) {
      winplay()
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Oops, You've lost the game.",
      });
      setuser(0)
      setround(0)
      setPc(0)
      setDraw(0)
      setUserImg(userPaper)
      setPcImg(pcPaper)
    }
  }


  return (
    <>
    <div className='select-none'>
    <nav className='select-none  flex justify-between items-center px-4 pt-3'>

<div onClick={refresh} className='md:relative absolute md:top-0 top-2 left-2  cursor-pointer bg-[#3f3f46] text-white rounded-full  md:text-xl px-3 py-2 text-xl flex justify-center items-center'><p className='mr-2'>Play Again </p><LuRefreshCcw/></div>
<div className='flex md:justify-between  w-full md:w-max justify-center md:mt-6 mt-12 items-center gap-10' >
    <div className=' flex  items-center flex-col bg-gray-300 h-24 w-24 rounded shadow-gray-600 shadow-lg'>
        <div className='bg-[#3f3f46] w-full rounded-t text-lg text-white text-center p-[1px]'>My Score</div>
        <div className={`text-4xl mt-3 font-bold ${userwin?"text-green-500":"text-red-500"} ${userwin === null ?"text-black":null}`}>{user}</div>
    </div>
    <div className=' flex  items-center flex-col bg-gray-300 h-24 w-24 rounded shadow-gray-600 shadow-lg'>
        <div className='bg-[#3f3f46] w-full rounded-t text-lg text-white text-center p-[1px]'>Draw </div>
        <div className='text-4xl mt-3 font-bold'>{draw}</div>
    </div>
    <div className=' flex  items-center flex-col bg-gray-300 h-24 w-24 rounded shadow-gray-600 shadow-lg'>
        <div className='bg-[#3f3f46] w-full rounded-t text-lg text-white text-center p-[1px]'> Opponent</div>
        <div className={`text-4xl mt-3 font-bold ${pcwin?"text-green-500":"text-red-500"} ${pcwin === null?"text-black":null}`}>{pc}</div>
    </div> 
</div>
<div onClick={theme}  className='md:relative absolute top-2 right-2  md:top-0 cursor-pointer flex justify-center items-center bg-[#3f3f46] text-white  rounded-full md:h-14 md:w-14 h-10 w-10 md:text-3xl text-xl'>{icon?<MdDarkMode/>:<MdLightMode/>}</div>


</nav>

    <div className={`text-3xl text-center select-none  mt-10 ${icon?"text-white":"text-[#1b1b1f]"}`}>
        <div>Round</div>
        <div className='text-4xl font-semibold select-none '>{round}</div>
      </div>
      <section className='flex justify-between items-center '>
{/* user */}
<div className='md:w-[50%] w-[45%]  h-[165px] flex justify-start'><img src={userImag} alt="img" /></div>
{/* pc  */}
<div className='md:w-[50%]  flex justify-end   h-[165px] w-[45%]'><img  src={pcImg} alt="img" /></div>
      </section>
      <div className='m-auto  relative  flex justify-evenly items-center  md:w-1/2 md:mt-0 mt-4'>
  <div><img onClick={()=>play(userrock)} className='md:h-32 h-28 cursor-pointer ' src={rock} alt="rock" /></div>

  <div><img onClick={()=>play(userPaper)} className='md:h-32 h-28  cursor-pointer md:absolute top-[-120px] left-[40%]' src={paper} alt="paper" /></div>
  <div><img onClick={()=>play(userscissor)} className='md:h-32 h-28 cursor-pointer' src={scissors} alt="scissors" /></div>

  
</div>
</div>
    </>
  )
}

export default Btn
