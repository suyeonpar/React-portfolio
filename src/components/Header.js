import React, { useEffect } from 'react'
import Typed from 'typed.js';


function Header() {
    
    function MyComponent() {
        useEffect(() => {
          const runTypedScript = () => {
            let typed = new Typed("#typed", {
              strings: [
                "PORTFOLIO",
                "HTML",
                "CSS",
                "JAVAscript"
              ],
              typeSpeed: 100,
              backSpeed: 80,
            });
          };
      
          // 스크립트 실행 함수를 호출
          runTypedScript();
        }, []);}

  return (
    <>
     <div className='banner-wrap w-full h-[600px] m-auto relative'>
        <img src='https://via.placeholder.com/1920x800' alt='메인배너' className='' />
        <div className='txt z-999 absolute'>
            <p className='text-3xl'>FRONT-END<span id="typed">{MyComponent}</span></p>
            <p>My Design Product</p>
            <div id="typed"></div>
        </div>
     </div>
    </>
  )
}

export default Header;