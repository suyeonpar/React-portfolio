import React, { Component, useEffect } from 'react';
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
  class Sky extends Component {
    constructor() {
      super();
      this.state = {
        stars: []
      };
    }

    componentDidMount() {
      this.makeStars();
    }

    getRandomX = () => Math.random() * window.innerWidth;
    getRandomY = () => Math.random() * window.innerHeight;
    randomRadius = () => Math.random() * 0.7 + 0.6;

    makeStars = () => {
      const maxSize = Math.max(window.innerWidth, window.innerHeight);
      const _size = Math.floor(maxSize / 2);

      const stars = new Array(_size).fill().map((_, i) => ({
        cx: this.getRandomX(),
        cy: this.getRandomY(),
        r: this.randomRadius(),
      }));

      this.setState({ stars });
    }

    render() {
      return (
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 Sky top-1/2 left-1/2 animate-moveStar">
          {this.state.stars.map((star, i) => (
            <circle
              key={i}
              className="star"
              cx={star.cx}
              cy={star.cy}
              r={star.r}
            />
          ))}
        </div>
      );
    }
  }

  return (
    <div>
      <Header />
      <div className=''>
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-moveStar">
      </div>
        </div>
      <div className='sky'></div>
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
      <Content />
      <Use />
      <Game />
      <Board />
      <Footer />
    </div>
  );
}

export default Main;
