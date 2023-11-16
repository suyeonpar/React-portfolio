import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "animate.css";
import Gallery from "../components/Gallery";
import Slide from "./Slide";

function Work({dark}) {

  const [showGallery, setShowGallery] = useState(true);
  const [showSlide, setShowSlide] = useState(false);
  
    const toggleSlide = () =>{
      setShowSlide(true);
      setShowGallery(false);
    }

    const toggleGallery = () => {
      setShowGallery(true);
      setShowSlide(false);
    }


  return (
    <>
    <div className='w-full mt-[150px] pb-20 mx-auto'>
      <p className={`md:mb-12 lg:mb-16 mb-8 text-3xl font-bold text-center md:text-5xl lg:text-6xl ${dark ? `text-white` : `text-black`}`}>WORK</p>
      <div className="w-[90%] flex justify-center mx-auto mb-7 text-center">
        <span onClick={toggleGallery} className={`w-14 leading-7 md:w-24 md:leading-9 text-xs mr-5 text-white bg-black cursor-pointer md:text-xl ${dark ? `border` : ``}`}>Gallery</span>
        <span onClick={toggleSlide} className={`w-14 text-xs leading-7 md:w-24 md:leading-9 text-white bg-black cursor-pointer md:text-xl ${dark ? `border` : ``}`}>Slide</span>
      </div>
      {showGallery && <Gallery dark={dark} />}
      {showSlide && <Slide dark={dark} />}
    </div>
    </>
  );    
}

export default Work;
