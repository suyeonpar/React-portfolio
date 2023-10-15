import React, { useEffect } from 'react'
import 'animate.css';
import Typed from 'typed.js';
import Content from '../components/Content';
import Wave from 'react-wavify'
import Game from '../components/Game';
import Board from '../components/Board';

function Main() {
  
  // useEffect(()=>{
  //   new WOW.WOW({
  //     boxClass: "wow",
  //     animateCladd: "animate__animated",
  //     live: false,
  //     mobile: true
  //   }).init();
  // },[])
  
    useEffect(() => {
      const options = {
        strings: [
          "React",
          "HTML",
          "CSS",
          "Tailwind",
          "JavaScript",
        ],
        typeSpeed: 100,
        backSpeed: 80,
      };
      const typed = new Typed("#typed", options);
      return () => {
        typed.destroy();
      };
    }, []);
  
  return (
   <>
   <div className="w-full pb-12 bg-fixed bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/images/main-bg.jpeg)" }}>
   <div className='banner-wrap w-full h-[600px] mx-auto relative'>
      <div className='txt z-999 absolute top-[35%] left-[25%]'>
          <p className='mb-5 text-7xl'>FRONT-END {"{"}<span id='typed' className='text-7xl text-[#5553CF]'>{Typed}</span>{"}"}</p>
          <p className='text-7xl text-[#242424]'>Design Product</p>
      </div>
      <img src='/images/main-bg.jpeg' alt='메인배너' className='' />
   </div>
   <Content />
   <Game />
   <Board />
   </div>
   </>
  )
}

export default Main