import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import WOW from "wowjs";
import "animate.css";
import Gallery from "../components/Gallery";
import Slide from "./Slide";

function Work({dark}) {

  const [showGallery, setShowGallery] = useState(true);
  const [showSlide, setShowSlide] = useState(false);
  
  const toggleSlide = () =>{
    setShowSlide(true);
    setShowGallery(false);
  };

  const toggleGallery = () => {
    setShowGallery(true);
    setShowSlide(false);
  }

  return (
    <>
    <div className='w-full mt-[150px] pb-20 mx-auto'>
      <p className={`md:mb-20 mb-10 text-3xl font-bold text-center md:text-6xl ${dark ? `text-white` : `text-black`}`}>WORK</p>
      <div className="w-[90%] flex justify-center mx-auto mb-7">
        <span onClick={toggleGallery} className="p-2 text-xs mr-5 text-white bg-black cursor-pointer md:text-xl">Gallery</span>
        <span onClick={toggleSlide} className="p-2 text-xs text-white bg-black cursor-pointer md:text-xl">Slide</span>
      </div>
      {showGallery && <Gallery />}
      {showSlide && <Slide />}
    </div>
    </>
  );    
}

export default Work;
