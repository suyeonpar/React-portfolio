import React, { Component, useEffect, useState } from 'react';
import 'animate.css';
import '../App.css';
import '../index.css';

function Sample() {

    //별배경
    const Stars = 200;

    const createRandomStar = () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const size = Math.random() * 3;
    const animationDelay = Math.random() * 5;
    return { x, y, size, animationDelay };
  };

  const stars = Array.from({ length: Stars }, createRandomStar);

  return (
    <div className="relative w-full bg-gradient-to-b from-[#010b1a] via-[#001738] via-blue-500 to-[#fff] h-[500px] transform animate-moveStar">
      {
      stars.map((star, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-[#e6ebf2] rounded-full animated-element"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.animationDelay}s`,
          }}
        ></div>
      )
    )}
    </div>
  );
}


export default Sample