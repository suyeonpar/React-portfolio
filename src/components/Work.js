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
    // const [mouseOver, setMouseOver] = useState(false);

    // useEffect(()=>{
    //   if( mouseOver === true){
        
    //   }

    // })

  return (
    <>
    <div className='w-full mt-[150px] pb-20 mx-auto'>
      <p className={`md:mb-20 mb-10 text-3xl ${dark ? `text-white` : `text-black`} font-bold text-center md:text-6xl`}>WORK</p>
      <div className={`h-[40px] w-[60%] leading-[40px] bg-[#010b1a] border rounded-md overflow-hidden relative text-center mx-auto ${dark ? `border-gray-200` : ``} md:h-[60px] w-[40%]`}>
        <div className='flex w-[82%] h-full justify-between mx-auto md:w-[80%] lg:w-[85%] items-center'>
        <p className={`text-white text-[12px] cursor-pointer md:text-2xl
        ${txt === -1 ? 'text-[14px] md:text-3xl lg:text-4xl font-bold on' : ''}`} onClick={() => {
          setTxt(-1);
        }
        }>ALL</p>
        {
          FilterId &&
          FilterId.map((e,i)=>{
            return(
              <p key={i} className={`text-white text-[12px] leading-[60px] text-on cursor-pointer md:text-xl lg:text-2xl
              ${txt === i ? 'text-[14px] md:text-2xl lg:text-4xl font-bold on' : ''}`}
               onClick={()=>{
               setTxt(i)
              }}>{e}</p>
            )
          })
        }
        </div>
        <div className='relative h-full custom-spin-animation'> 
        {stars &&
          stars.map((star, i) => (
            <div
              key={i}
              className="absolute -top-[50px] bg-white rounded-full"
              style={{
                left: `${star.x}px`,
                top: `${star.y}px`,
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
            ></div>
            )
          )}
        </div>
        <div className='relative custom-spin-animation2'> 
        {restars &&
          restars.map((e, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full overflow-hidden left-[50%]"
              style={{
                left: `${e.x}px`,
                top: `${e.y}px`,
                width: `${e.size}px`,
                height: `${e.size}px`,
                animationDelay: `${e.animationDelay}s`
              }}
            >
            </div>
          ))
        }
        </div>
      </div>
      <div className="w-[90%] flex justify-end mt-14">
          <span onClick={toggleSlide} className="p-2 mr-5 text-xl text-white bg-black cursor-pointer">Slide</span>
          <span onClick={toggleGallery} className="p-2 text-xl text-white bg-black cursor-pointer">Gallery</span> 
          {showSlide && <Slide />} 
          {showGallery && <Gallery />}
      </div>
    </div>
    </>
  );    
}

export default Work;
