import React, { useEffect, useState } from 'react';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Header({darkMode,setDarkMode}) {

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
      <div className={`z-[9999] w-full h-[80px] bg-white mx-auto items-center top-0 flex justify-between border-b border-[#808080] ${ScrollActive ? 'fixed' : 'absolute'}`}>
        <NavLink to='/'><img src='/images/logo-black.png' alt='logo' className='hidden sm:block scale-[0.8]' /></NavLink>
        <ul className='flex items-center hidden mr-3 text-2xl cursor-pointer md:flex'>
          <NavLink to='/about'><li className='mr-5'>About</li></NavLink>
          <li className='mr-5'>Game</li>
          <li className='mr-5'>Board</li>
          <FontAwesomeIcon icon={darkMode ? faCloudSun : faMoon} onClick={() => setDarkMode(!darkMode)} />
        </ul>
        
        <div className='mr-5 cursor-pointer md:hidden'>
        {
          Array(3).fill().map((_,i)=>{
            return(
              <span key={i} className='w-[30px] h-[1px] bg-black mb-2 block'></span>
            )
          })
        }
        </div>
      </div>
    </>
  );
}

export default Header;
