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
        typeSpeed: 150,
        backSpeed: 80,
        loop : true
      };
      const typed = new Typed("#typed", options);
      return () => {
        typed.destroy();
      };
    });
  
  return (
   <>
   <div className="w-full pb-12 bg-fixed bg-center bg-no-repeat bg-cover">
    <div className='banner-wrap w-full h-[800px] mx-auto relative'>
      <img src='/images/bg2.jpg' alt='메인배너' className='z-1' />
      <div className='txt absolute top-[35%] left-[50%] translate-x-[-50%] w-[80%]'>
          <p className='mb-5 font-bold text-8xl'>FRONT-END  {"{"}<span id='typed' className='text-8xl text-[#5E5BE3]'>{Typed}</span>{"}"}</p>
          <p className='text-8xl text-[#242424] font-bold after:'>My Design Portfolio</p>
      </div>
   </div>
   <Content />
   <Game />
   <Board />
   </div>
   </>
  )
}

export default Main