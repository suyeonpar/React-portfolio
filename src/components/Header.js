import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation, useParams } from 'react-router-dom';

function Header({ dark, toggleDarkMode }) {

  const [isActive, setIsActive] = useState(false);

  const handleHamburgerClick = () => {
    setIsActive(!isActive);
  };

  //스크롤 이벤트 (헤더 fixed)
  const [ScrollY, setScrollY] = useState(0);
  const [ScrollActive, setScrollActive] = useState(false);
  
  function scrollFixed() {
    if (ScrollY > 110) {
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
  }, [scrollFixed]);
  
  console.log(ScrollY)
  
  const aboutScroll = () =>
  window.scrollTo({
    top: 1140,
    behavior: "smooth"
  });
  
  const workScroll = () =>
  window.scrollTo({
    top: 1850,
    behavior: "smooth"
  });

  const contactScroll = () =>
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });

  //햄버거 네비
  const HamburgerNav = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () =>{
      setIsOpen(!isOpen);
    }
  };
  
  const location = useLocation();

  return (
    <>
      <div className={`z-[999] h-[50px] w-full mx-auto items-center top-0 flex justify-between md:h-[80px] ${ScrollActive ? 'fixed bg-white border-b border-[#808080]' : 'absolute'}`}>
        <NavLink to='/'><img src={ScrollActive | location.pathname !== '/' ? `/images/suyeon-logo-1.png` : `/images/suyeon-logo-dark-1.png`} alt='logo' className={`scale-[0.5] md:scale-[0.8] md:mr-0 mr-3`} /></NavLink>
        <ul className={`items-center hidden ${ScrollActive | location.pathname !== '/' ? `text-black` : `text-white`} mr-3 text-2xl cursor-pointer md:flex`}>
          <li className='mr-5' onClick={aboutScroll}>About</li>
          <li className='mr-5' onClick={workScroll}>Work</li>
          <li className='mr-5' onClick={contactScroll}>Contact</li>
          <FontAwesomeIcon icon={dark ? faCloudSun : faMoon} onClick={toggleDarkMode} className='' />
        </ul>
        <FontAwesomeIcon icon={dark ? faCloudSun : faMoon} onClick={toggleDarkMode} className={`block cursor-pointer md:hidden mr-7 z-[9999] ${ScrollActive ? `text-black` : `text-white`}`} />
      </div>
    </>
  );
}

export default Header;
