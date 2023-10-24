import React, { useEffect, useState } from 'react';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Header({darkMode,setDarkMode}) {

  //스크롤 이벤트 (헤더 fixed)
  const [ScrollY, setScrollY] = useState(0);
  const [ScrollActive, setScrollActive] = useState(false);
  
  function scrollFixed() {
    if (ScrollY > 100) {
      setScrollY(window.scrollY);
      setScrollActive(true);
    } else {
      setScrollY(window.scrollY);
      setScrollActive(false);
    }
  }

  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", scrollFixed);
    }
    scrollListener();
    return () => {
      window.removeEventListener("scroll", scrollFixed);
    };
  });

  //햄버거 네비
  const HamburgerNav = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () =>{
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <div className={`z-[9999] w-full h-[80px] bg-white mx-auto items-center top-0 flex justify-between border-b border-[#808080] ${ScrollActive ? 'fixed' : 'absolute'}`}>
        <NavLink to='/'><img src='/images/logo-black.png' alt='logo' className='hidden sm:block scale-[0.8]' /></NavLink>
        <ul className='flex items-center hidden mr-3 text-2xl cursor-pointer md:flex'>
          <NavLink to='/about'><li className='mr-5'>About</li></NavLink>
          <li className='mr-5'>Game</li>
          <li className='mr-5'>Board</li>
          <FontAwesomeIcon icon={darkMode ? faCloudSun : faMoon} onClick={() => setDarkMode(!darkMode)} />
        </ul>
        <div className='mr-5 cursor-pointer relative md:hidden transition-all'>
        
          {Array(3).fill().map((_, i) => (
            <span key={i} className='hamburger w-[30px] h-[1px] bg-black mb-2 block'></span>
          ))}
        

          <div className='content absolute bg-white top-0 -right-[400px]'>
            <ul>
              <li className='text-xl'>about</li>
              <li className='text-xl'>content</li>
              <li className='text-xl'>game</li>
            </ul>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default Header;
