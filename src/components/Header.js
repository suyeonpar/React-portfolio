import React, { useEffect, useState } from 'react'
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Header() {

  const [on, setOn] = useState(false);

  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => {
    setIsActive(!isActive);
  };

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
  
  return (
    <>
     <div className={`z-[9999] w-full h-[80px] bg-white mx-auto items-center top-0 flex justify-between border-b border-[#808080]  ${ScrollActive ? 'fixed' : 'absolute'}`}>
      <NavLink to='/'><img src='/images/logo-black.png' alt='logo' className='ml-5'/></NavLink>
      <ul className='flex items-center justify-between w-[30%] text-2xl cursor-pointer'>
        <li className=''>About</li>
        <li>Game</li>
        <li>Board</li>
        <FontAwesomeIcon icon={faMoon} className='mr-5 text-3xl' />
      </ul>
     </div>
    </>
  )
}

export default Header;