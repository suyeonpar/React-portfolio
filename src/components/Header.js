import React, { useEffect } from 'react'
import Typed from 'typed.js';
import WOW from 'wowjs';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

function Header() {

  return (
    <>
     <div className='w-full h-[80px] m-auto bg-white items-center flex justify-between'>
      <img src='/images/logo.png' alt='logo' />
      <ul className='flex items-center justify-between w-[30%]'>
        <li>frontend</li>
        <li>frontend</li>
        <li>frontend</li>
        <FontAwesomeIcon icon={faCloudSun} className='text-3xl' />
      </ul>
     </div>
    </>
  )
}

export default Header;