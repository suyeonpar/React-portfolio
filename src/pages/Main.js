import React, { useEffect } from 'react'
import WOW from 'wowjs';
import 'animate.css';

function Main() {
  
  useEffect(()=>{
    new WOW.WOW({
      boxClass: "wow",
      animateCladd: "animate__animated",
      live: false,
      mobile: true
    }).init();
  },[])
  
  return (
   <>
   <div className='banner-wrap w-full h-[600px] m-auto relative'>
        <div className='txt z-999 absolute top-[35%] left-[25%]'>
            <p className='mb-5 text-7xl'>FRONT-END{"{"}<span className='text-7xl text-[#009DF5] wow animate__fadeInDown' data-wow-duration="2s">Portfolio</span>{"}"}</p>
            <p className='text-7xl text-[#242424]'>My Design Product</p>
        </div>
        <img src='https://via.placeholder.com/1920x800' alt='메인배너' className='' />
   </div>
   </>
  )
}

export default Main