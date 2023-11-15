import React, { useEffect, useState } from 'react';
import 'animate.css';
import Typed from 'typed.js';
import Board from '../components/Board';
import Use from '../components/Use';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';
import '../index.css';
import Profile from '../components/Profile';
import Aside from '../components/Aside';
import Work from '../components/Work';
import { createStars } from './../store';
import Contact from '../components/Contact';

function Main({dark, toggleDarkMode}) {

  //타이핑
  useEffect(() => {
    const strings = [
      "Developer"
    ];
    const options = {
      strings: strings,
      typeSpeed: 100,
      showCursor: false
    };
    const typed = new Typed("#typed", options);
    
    return () => {
        typed.destroy();
    };
  }, []);

  //별배경
  const Stars = 2000;
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(800);
  const [rewidth, setReWidth] = useState(1920);
  const [reheight, setReHeight] = useState(-800);

  const [stars, setStars] = useState([]);
  const [restars, setRestars] = useState([]);

  useEffect(() => {
    const { stars, restars } = createStars(Stars, width, height, rewidth, reheight);
    setStars(stars);
    setRestars(restars);
  }, [Stars, width, height, rewidth, reheight]);

  return (
    <>
    <div className={`w-full ${dark ? `bg-[#02081f]` : `bg-white`} h-full mx-auto`}>
      <Header dark={dark} toggleDarkMode={toggleDarkMode} />
      <div className={`w-full overflow-hidden h-[500px] transform pb-10 md:h-[800px] ${dark ? `bg-gradient-to-b from-[#010b1a] via-[#010b1a] to-black` : `bg-gradient-to-b from-black via-[#010b1a] to-[#fff] `}`}>
        <div className='relative custom-spin-animation'> 
          {
            stars.map((e, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full overflow-hidden left-[50%]"
                style={{
                  left: `${e.x}px`,
                  top: `${e.y}px`,
                  width: `${e.size}px`,
                  height: `${e.size}px`,
                  animationDelay: `${e.animationDelay}s`
                  }}
                ></div>
              )
            )}
          </div>
          <div className='relative custom-spin-animation2'> 
          {
            restars.map((e, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full overflow-hidden left-[50%]"
                style={{
                  left: `${e.x}px`,
                  top: `${e.y}px`,
                  width: `${e.size}px`,
                  height: `${e.size}px`,
                  animationDelay: `${e.animationDelay}s`
                }}
              >
              </div>
            ))
          }
        </div>
        <div className='mt-20 text-center md:mt-28'>
          <p className='mb-5 pt-[130px] text-xl text-[#ddd] md:text-4xl'>S o o o</p>
          <span id="typed" className='text-6xl font-bold text-white md:text-8xl lg:text-[135px]' />
        </div>
      </div>
      <Profile dark={dark} />
      <Work dark={dark} />
      <Use dark={dark} /> 
      <Board dark={dark} />
      {/* <Contact dark={dark} /> */}
      <Footer dark={dark} />
      <Aside dark={dark} toggleDarkMode={toggleDarkMode} />
    </div>
    </>
  );
}
export default Main;
