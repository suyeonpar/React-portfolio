import { faChevronDown, faChevronUp, faCloudSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Aside() {

    const Top = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const Down = () =>
    window.scrollTo({
      bottom: 0,
      behavior: "smooth",
    });

  return (
    <>
    <div className='bottom-[50px] right-5 fixed'>
        <ul className=''>
            <li className=''><FontAwesomeIcon icon={faCloudSun} /></li>
            <li onClick={Top} className=''><FontAwesomeIcon icon={faChevronUp} /></li>
            <li onClick={Down} className=''><FontAwesomeIcon icon={faChevronDown} /></li>
        </ul>
    </div>
    </>
  )
}

export default Aside