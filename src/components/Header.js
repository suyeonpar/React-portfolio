import React, { useEffect, useState } from 'react'
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

function Header() {

  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const [ScrollY, setScrollY] = useState(0); // window 의 scrollY값을 저장
  const [ScrollActive, setScrollActive] = useState(false);
  function scrollFixed() {
    if (ScrollY > 600) {
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
     <div className='w-full h-[80px] m-auto bg-white items-center flex justify-between'>
      <img src='/images/logo.png' alt='logo' className='ml-5'/>
      <ul className='flex items-center justify-between w-[30%]'>
        <li onClick={toggleActive} className='${isActive ? text-black : text-white}'>profile</li>
        <li>content</li>
        <li>game</li>
        <FontAwesomeIcon icon={faCloudSun} className='mr-5 text-3xl' />
      </ul>
     </div>
    </>
  )
}

export default Header;