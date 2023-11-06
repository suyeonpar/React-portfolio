import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  EffectCoverflow,
  Mousewheel,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import WOW from "wowjs";
import "animate.css";
import contentdata from '../data/ContentData'
import Gallery from "../components/Gallery";
import Slide from "./Slide";

function Work({dark, stars, restars}) {

  const [showGallery, setShowGallery] = useState(false);
  const [showSlide, setShowSlide] = useState(true);
  
  const toggleSlide = () =>{
    setShowSlide(true);
    setShowGallery(false);
  };

  const toggleGallery = () => {
    setShowGallery(true);
    setShowSlide(false);
  }

    //새로운창 연결
    const OpenNewTab = (url) => {
        window.open(url, "_blank", "noopener, noreferrer");
    };


  return (
    <>
    <div className='w-full mt-[150px] pb-20 mx-auto'>
      <p className={`md:mb-20 mb-10 text-3xl ${dark ? `text-white` : `text-black`} font-bold text-center md:text-6xl`}>WORK</p>
      <div className="w-[90%] flex justify-center mx-auto mt-7">
        <span onClick={toggleSlide} className="p-2 mr-5 text-xs text-white bg-black cursor-pointer md:text-xl">Slide</span>
        <span onClick={toggleGallery} className="p-2 text-xs text-white bg-black cursor-pointer md:text-xl">Gallery</span>
      </div>
      {showSlide && <Slide setShowGallery={setShowGallery} setShowSlide={setShowSlide} showGallery={showGallery} showSlide={showSlide} />}
      {showGallery && <Gallery setShowGallery={setShowGallery} setShowSlide={setShowSlide} showGallery={showGallery} showSlide={showSlide} />}
    </div>
    </>
  );    
}

export default Work;
