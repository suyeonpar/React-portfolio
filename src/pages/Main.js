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

function Main() {
  //animation
  useEffect(() => {
    const elements = document.querySelectorAll('.wow');
    elements.forEach((e, i) => {
      const delay = 0.5;
      const duration = 0.7;
      const delayTime = i * delay;
      e.style.animationDelay = `${delayTime}s`;
      e.style.animationDuration = `${duration}s`;
    });

    new WOW.WOW().init();
  }, []);

  //별배경
  const Stars = 300
  
  const createRandomStar = () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const size = Math.random() * 4;
  const animationDelay = Math.random() * 5;
  return { x, y, size, animationDelay };
  };
  
  const stars = Array.from({ length: Stars }, createRandomStar);

  return (
    <div>
      <Header />
      <div className="w-full bg-gradient-to-b from-[#010b1a] via-[#001738] via-[#133194] to-[#fff] h-[700px] transform">
        <div className='relative custom-spin-animation'> 
          {
            stars.map((star, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-[#ddd] rounded-full"
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
          <div className='text-center'>
            <p className='mb-10 pt-[130px] text-8xl text-white'>Front-end Developer</p>
            <span className='text-white text-8xl'>{"{"} </span>
            <span className='text-white text-8xl wow animate__fadeInUp'>P</span>
            <span className='text-white text-8xl wow animate__fadeInUp'>o</span>
            <span className='text-white text-8xl wow animate__fadeInUp'>r</span>
            <span className='text-white text-8xl wow animate__fadeInUp'>t</span>
            <span className='text-white text-8xl wow animate__fadeInUp'>f</span>
            <span className='text-white text-8xl wow animate__fadeInUp'>o</span>
            <span className='text-white text-8xl wow animate__fadeInUp'>l</span>
            <span className='text-white text-8xl wow animate__fadeInUp'>i</span>
            <span className='text-white text-8xl wow animate__fadeInUp'>o</span>
            <span className='text-white text-8xl'> {"}"}</span>
          </div>
        </div>
      <Content />
      <Use />
      <Game />
      <Board />
      <Footer />
    </div>
  );
}

export default Main;
