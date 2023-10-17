import React, { useEffect } from 'react'
import 'animate.css';
import Typed from 'typed.js';
import Content from '../components/Content';
import Game from '../components/Game';
import Board from '../components/Board';
import Use from '../components/Use';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WOW from 'wowjs';

function Main() {
  
  useEffect(() => {
    const elements = document.querySelectorAll('.wow');

    elements.forEach((e,i) => {
      const delay = 0.5;
      const duration = 0.7;
      const delayTime = i * delay;
      e.style.animationDelay = `${delayTime}s`;
      e.style.animationDuration = `${duration}s`;
    });

    new WOW.WOW().init();
  }, []);
  
    // useEffect(() => {
    //   const options = {
    //     strings: [
    //       "React",
    //       "HTML",
    //       "CSS",
    //       "Tailwind",
    //       "JavaScript",
    //     ],
    //     typeSpeed: 200,
    //     backSpeed: 60,
    //     cursor: false,
    //     loop : true
    //   };
    //   const typed = new Typed("#typed", options);
    //   return () => {
    //     typed.destroy();
    //   };
    // });
  
  return (
   <>
   <Header />
   <div className="w-full bg-fixed bg-center bg-no-repeat bg-cover bg-[#fafcff]">
    <div className="bg-[#edf4ff] h-[500px] text-center">
      <p className='mb-5 font-bold pt-[130px] text-8xl'>Front-end Developer</p>
      <span className='text-8xl'>{"{"}</span>
      <span className='text-[#5E5BE3] text-8xl wow animate__fadeInUp'>P</span>
      <span className='text-[#5E5BE3] text-8xl wow animate__fadeInUp'>o</span>
      <span className='text-[#5E5BE3] text-8xl wow animate__fadeInUp'>r</span>
      <span className='text-[#5E5BE3] text-8xl wow animate__fadeInUp'>t</span>
      <span className='text-[#5E5BE3] text-8xl wow animate__fadeInUp'>f</span>
      <span className='text-[#5E5BE3] text-8xl wow animate__fadeInUp'>o</span>
      <span className='text-[#5E5BE3] text-8xl wow animate__fadeInUp'>l</span>
      <span className='text-[#5E5BE3] text-8xl wow animate__fadeInUp'>i</span>
      <span className='text-[#5E5BE3] text-8xl wow animate__fadeInUp'>o</span>
      <span className='text-8xl'>{"}"}</span> 
      {/* <p id='typed' className='text-8xl text-[#5E5BE3]'>{Typed}</p> */}
    </div>
   <Content />
   <Use />
   <Game />
   <Board />
   <Footer />
   </div>
   </>
  )
}

export default Main