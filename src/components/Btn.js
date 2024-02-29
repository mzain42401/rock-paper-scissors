import React from 'react'
import MyImage from '../images/paper2.png'
import MyImage2 from '../images/paper1.png'
import rock from '../images/rock-user.png'
import paper from '../images/paper-user.png'
import scissors from '../images/scissors-user.png'




const Btn = () => {
  return (
    <>
      <section className='flex justify-between items-center '>

<div className='md:w-[50%] w-[45%] flex justify-start'><img src={MyImage} alt="img" /></div>

<div className='md:w-[50%]  flex justify-end  w-[45%]'><img  src={MyImage2} alt="img" /></div>


      </section>
      <div className='m-auto  relative  flex justify-evenly items-center  md:w-1/2 md:mt-0 mt-4'>
  <div><img className='h-32 cursor-pointer ' src={rock} alt="rock" /></div>
  <div><img className='h-32  cursor-pointer md:absolute top-[-120px] left-[40%]' src={paper} alt="paper" /></div>
  <div><img className='h-32 cursor-pointer' src={scissors} alt="scissors" /></div>

  
</div>
    </>
  )
}

export default Btn
