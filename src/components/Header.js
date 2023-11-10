import React, { useEffect, useState } from 'react';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Header({ dark, toggleDarkMode }) {

  const [isActive, setIsActive] = useState(false);

  const handleHamburgerClick = () => {
    setIsActive(!isActive);
  };

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
      <div className={`z-[999] h-[50px] w-full  ${dark ? 'bg-black text-white' : 'bg-white'} mx-auto items-center top-0 flex justify-between border-b border-[#808080] md:h-[80px] ${ScrollActive ? 'fixed' : 'absolute'}`}>
        <NavLink to='/'><img src={dark ? '/images/suyeon-logo-dark-1.png' : '/images/suyeon-logo-1.png'} alt='logo' className='scale-[0.5] md:scale-[0.8] md:mr-0 mr-3' /></NavLink>
        <ul className='items-center hidden mr-3 text-2xl cursor-pointer md:flex'>
          <NavLink to='/about'><li className='mr-5'>about</li></NavLink>
          <li className='mr-5'>work</li>
          <li className='mr-5'>board</li>
          <FontAwesomeIcon icon={dark ? faCloudSun : faMoon} onClick={toggleDarkMode} className={dark ? `bg-black text-white` : `bg-white text-black`} />
        </ul>
        <div onClick={handleHamburgerClick} className='mt-2 mr-5 transition-all cursor-pointer md:hidden'>
          {Array(3).fill().map((_, i) => (
            <span
              key={i}
              className={`hamburger w-[30px] h-[1px] bg-black mb-2 block ${dark ? 'bg-white' : ''}`}
              style={{
                transform: isActive ? (i === 0 ? 'rotate(45deg) translateY(12px)' : i === 2 ? 'rotate(-45deg) translateY(-13px)' : 'rotate(0)') : '',
                opacity: isActive ? (i === 1 ? 0 : 1) : 1,
              }}>
            </span>
          ))}
        </div>
      </div>
      <div className={`bg-white z-[998] fixed overflow-hidden top-0 w-[320px] h-full md:hidden ${isActive ? `right-0` : `-right-[330px]`}`}>
        <ul className='w-4/5 mx-auto mt-20 text-xl'>
          <li className='mb-5 border-b cursor-pointer hover:font-bold'>about</li>
          <li className='mb-5 border-b cursor-pointer hover:font-bold'>work</li>
          <li className='mb-2 border-b cursor-pointer hover:font-bold'>game</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
