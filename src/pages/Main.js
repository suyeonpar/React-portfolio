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

function Main() {
  //animation
  // useEffect(() => {
  //   const elements = document.querySelectorAll('.wow');
  //   elements.forEach((e, i) => {
  //     const delay = 0.5;
  //     const duration = 0.7;
  //     const delayTime = i * delay;
  //     e.style.animationDelay = `${delayTime}s`;
  //     e.style.animationDuration = `${duration}s`;
  //   });

  //   new WOW.WOW().init();
  // }, []);

  //다크모드
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
  }

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setIsDarkMode(storedDarkMode === 'true');
    }
  }, []);

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
  const Stars = 3000;
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(800);
  
  const createRandomStar = () => {
  const x = Math.random() * width;
  const y = Math.random() * height;
  const size = Math.random() * 2;
  const animationDelay = Math.random() * 5;
  return { x, y, size, animationDelay };
  };
  
  const stars = Array.from({ length: Stars }, createRandomStar);
  
  return (
    <div>
      <Header />
      <div className="w-full overflow-hidden bg-gradient-to-b from-black via-[#010b1a] to-[#fff] h-[700px] transform pb-10">
        <div className='relative custom-spin-animation'> 
          {
            stars.map((star, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full overflow-hidden left-[50%]"
                style={{
                  left: `${star.x}px`,
                  top: `${star.y}px`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  animationDelay: `${star.animationDelay}s`
                  }}
                ></div>
              )
            )}
          </div>
          <div className='mt-20 text-center'>
            <p className='mb-5 pt-[130px] text-4xl text-[#ddd]'>S o o o</p>
            <span id="typed" className='font-bold text-white text-9xl' />
          </div>
        </div>
      <Profile />
      <Project />
      <Content />
      <Use />
      <Board />
      <Footer />
    </div>
  );
}
export default Main;
