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
import { NavLink } from 'react-router-dom';
import { faL } from "@fortawesome/free-solid-svg-icons";
import Gallery from "../components/Gallery";
import Slide from "../pages/Slide";

function Work({dark, stars, restars}) {

  //필터
  const txtList = ["Project", "Clone", "API", "Game"];
  const [txt, setTxt] = useState(-1);
  const FilterId = [...new Set(contentdata.map(e => e.id))];
  const [DataFilter, setDataFilter] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const menu = ["/slide" , "/gallery"];

  const [showGallery, setShowGallery] = useState(false);
  const [showSlide, setShowSlide] = useState(false);

  const toggleGallery = () => {
    setShowGallery(!showGallery);
    setShowSlide(false)
  };

  const toggleSlide = () =>{
    setShowSlide(!showSlide);
    setShowGallery(false)
  };

  useEffect(() => {
    if (txt === -1) {
      setDataFilter(contentdata);
    } else {
      const filteredData = contentdata.filter(e => e.id === txtList[txt]);
      setDataFilter(filteredData);
    }
  }, [txt]);

    //새로운창 연결
    const OpenNewTab = (url) => {
        window.open(url, "_blank", "noopener, noreferrer");
    };

    // 마우스오버 이벤트
    const [mouseOver, setMouseOver] = useState(false);


  return (
    <>
    <div className='w-full mt-[150px] pb-20 mx-auto'>
      <p className={`md:mb-20 mb-10 text-3xl ${dark ? `text-white` : `text-black`} font-bold text-center md:text-6xl`}>WORK</p>
      <div className="w-[90%] flex justify-end mt-14">
          {/* <span onClick={toggleSlide} className="p-2 mr-5 text-xl text-white bg-black cursor-pointer">Slide</span>
          <span onClick={toggleGallery} className="p-2 text-xl text-white bg-black cursor-pointer">Gallery</span> 
          {showSlide && <Slide />}
          {showGallery && <Gallery />} */}
          <Slide />
      </div>
    </div>
    </>
  );    
}

export default Work;
