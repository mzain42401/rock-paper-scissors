import React from 'react'
import { LuRefreshCcw } from "react-icons/lu";
import { MdDarkMode,MdLightMode } from "react-icons/md";


const Top = ({theme,icon}) => {
    
    const refresh=()=>{
        window.location.reload()
    }
  return (
    <>
<nav className='select-none  flex justify-between items-center px-4 pt-3'>

    <div onClick={refresh} className='md:relative absolute md:top-0 top-2 left-2  cursor-pointer bg-[#3f3f46] text-white rounded-full md:h-14 md:w-14 h-10 w-10 md:text-3xl text-xl flex justify-center items-center'><LuRefreshCcw/></div>
    <div className='    flex md:justify-between  w-full md:w-max justify-center mt-6 items-center gap-10' >
        <div className=' flex  items-center flex-col bg-gray-300 h-24 w-24 rounded shadow-gray-600 shadow-lg'>
            <div className='bg-[#3f3f46] w-full rounded-t text-lg text-white text-center p-[1px]'>My Score</div>
            <div className='text-4xl mt-3 font-bold'>19</div>
        </div>
        <div className=' flex  items-center flex-col bg-gray-300 h-24 w-24 rounded shadow-gray-600 shadow-lg'>
            <div className='bg-[#3f3f46] w-full rounded-t text-lg text-white text-center p-[1px]'>Draw </div>
            <div className='text-4xl mt-3 font-bold'>19</div>
        </div>
        <div className=' flex  items-center flex-col bg-gray-300 h-24 w-24 rounded shadow-gray-600 shadow-lg'>
            <div className='bg-[#3f3f46] w-full rounded-t text-lg text-white text-center p-[1px]'> Opponent</div>
            <div className='text-4xl mt-3 font-bold'>19</div>
        </div> 
    </div>
    <div onClick={theme}  className='md:relative absolute top-2 right-2  md:top-0 cursor-pointer flex justify-center items-center bg-[#3f3f46] text-white  rounded-full md:h-14 md:w-14 h-10 w-10 md:text-3xl text-xl'>{icon?<MdDarkMode/>:<MdLightMode/>}</div>


</nav>


    </>
  )
}

export default Top
