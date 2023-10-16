import React, { useEffect, useState } from 'react'
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

function Header() {

  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const [ScrollY, setScrollY] = useState(0);
  const [ScrollActive, setScrollActive] = useState(false);
  function scrollFixed() {
    if (ScrollY > 8) {
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
     <div className={`w-full h-[80px] m-auto bg-white items-center flex justify-between ${ScrollActive ? 'fixed' : ''}`}>
      <img src='/images/logo.png' alt='logo' className='ml-5'/>
      <ul className='flex items-center justify-between w-[30%] text-2xl'>
        <li onClick={toggleActive} className=''>profile</li>
        <li>game</li>
        <li>board</li>
        <FontAwesomeIcon icon={faCloudSun} className='mr-5 text-3xl' />
      </ul>
     </div>
    </>
  )
}

export default Header;