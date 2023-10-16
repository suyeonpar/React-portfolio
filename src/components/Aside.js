import { faChevronDown, faChevronUp, faCloudSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

function Aside() {

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
    <div isActive={isActive} className='bottom-[50px] right-5 fixed'>
      {isActive &&
        <ul className=''>
            <li className=''><FontAwesomeIcon icon={faCloudSun} /></li>
            <li onClick={Top} className=''><FontAwesomeIcon icon={faChevronUp} /></li>
            <li onClick={Down} className=''><FontAwesomeIcon icon={faChevronDown} /></li>
        </ul>
      }
    </div>
    </>
  )
}

export default Aside