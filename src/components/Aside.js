import { faChevronDown, faChevronUp, faCloudSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

function Aside({dark, toggleDarkMode}) {

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const isActiveClick = () => {
      if (window.scrollY > 200) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener("scroll", isActiveClick);
    return () => {
      window.removeEventListener("scroll", isActiveClick); 
    };
  }, []);

  const Top = () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const Down = () =>
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });

  return (
    <>
    <div isActive={isActive} className='bottom-[50px] right-5 fixed z-9999'>
      {
        isActive &&
        <ul className='flex flex-col items-center text-xl md:text-3xl p-3 rounded-[45%] z-[99999]'>
          <li>
          <FontAwesomeIcon icon={dark ? faCloudSun : faMoon} onClick={toggleDarkMode} className={`rounded-[50%] p-1 text-xl md:hidden ${dark ? `bg-black text-white` : `text-black`}`} />
          </li>
          <li onClick={Top} className={ `p-1 rounded-full ${dark ? `text-white bg-[#02081f]` : ``}`}><FontAwesomeIcon icon={faChevronUp} /></li>
          <li onClick={Down} className={ `p-1 rounded-full ${dark ? `text-white bg-[#02081f]` : ``}`}><FontAwesomeIcon icon={faChevronDown} /></li>
        </ul>
      }
    </div>
    </>
  )
}

export default Aside