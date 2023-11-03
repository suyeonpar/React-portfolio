import React, { Component, useEffect, useState } from 'react';
import 'animate.css';
import Typed from 'typed.js';
import Content from '../components/Content';
import Game from '../components/Game';
import Board from '../components/Board';
import Use from '../components/Use';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WOW from 'wowjs';
import '../App.css';
import '../index.css';
import Profile from '../components/Profile';
import { faArrowDown, faL } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Project from '../components/Project';
import Aside from '../components/Aside';
import Notfound from './Notfound';
import { Link } from 'react-router-dom';
import Slide from '../components/Slide';
import Work from '../components/Work';

function Main() {

  //다크모드
  const savedDarkMode = localStorage.getItem('dark');
  const isDarkMode = savedDarkMode ? savedDarkMode === 'true' : false;
  const [dark, setDark] = useState(isDarkMode);

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('dark', dark ? 'true' : 'false');
  }, [dark]);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

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

    const createRandomStar = () => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * 2;
      const animationDelay = Math.random() * 5;
      return { x, y, size, animationDelay };
    };

    const starsArray = Array.from({ length: Stars }, createRandomStar);
    setStars(starsArray);

    const reverseStar = () => {
      const x = Math.random() * rewidth;
      const y = Math.random() * reheight;
      const size = Math.random() * 2;
      const animationDelay = Math.random() * 5;
      return { x, y, size, animationDelay };
    };

    const restarsArray = Array.from({ length: Stars }, reverseStar);
    setRestars(restarsArray);
  }, []);

  return (
    <>
    <div className={`w-full ${dark ? `bg-[#02081f]` : `bg-white`} h-full mx-auto`}>
      <Header dark={dark} toggleDarkMode={toggleDarkMode} />
      <div className={`w-full overflow-hidden bg-gradient-to-b from-black via-[#010b1a] to-[#fff] h-[500px] transform pb-10 md:h-[800px] ${dark ? `bg-gradient-to-b from-[#010b1a] via-[#010b1a] to-[#02081f]` : ``}`}>
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
      <Work dark={dark} Stars={Stars} stars={stars} restars={restars} />
      <Use />
      <Board dark={dark} />
      <Footer dark={dark} />
      <Aside dark={dark} toggleDarkMode={toggleDarkMode} />
    </div>
    </>
  );
}
export default Main;
