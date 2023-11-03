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
import Gallery from "./Gallery";

function Slide({ dark, setShowGallery, setShowSlide, showGallery, showSlide }) {

  //필터
  const txtList = ["Project", "Clone", "API", "Game"];
  const [txt, setTxt] = useState(-1);
  const FilterId = [...new Set(contentdata.map(e => e.id))];
  const [DataFilter, setDataFilter] = useState([]);
  const [isActive, setIsActive] = useState(false);

    const toggleSlide = () =>{
      setShowSlide(!showSlide);
      setShowGallery(false);
    };
    
    const toggleGallery = () => {
      setShowGallery(!showGallery);
      setShowSlide(false);
    }

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
    
  const Stars = 2000;
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(800);
  const [rewidth, setReWidth] = useState(1920);
  const [reheight, setReHeight] = useState(-800);
  
  const [stars, setStars] = useState([]);
  const [restars, setRestars] = useState([]);

  useEffect(() => {

    const createRandomStar = () => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * 2;
      const animationDelay = Math.random() * 5;
      return { x, y, size, animationDelay };
    };

    const starsArray = Array.from({ length: Stars }, createRandomStar);
    setStars(starsArray);

    const reverseStar = () => {
      const x = Math.random() * rewidth;
      const y = Math.random() * reheight;
      const size = Math.random() * 2;
      const animationDelay = Math.random() * 5;
      return { x, y, size, animationDelay };
    };

    const restarsArray = Array.from({ length: Stars }, reverseStar);
    setRestars(restarsArray);
  }, []);

  return (
    <>
    <div className='w-full pb-20 mx-auto'>
      <div className="flex flex-wrap items-center mx-auto">
        <div className={`h-[40px] w-[80%] leading-[40px] bg-[#010b1a] border rounded-md overflow-hidden relative text-center mx-auto ${dark ? `border-gray-200` : ``} md:h-[60px] md:w-[60%]`}>
          <div className='flex w-[82%] h-full justify-between mx-auto md:w-[80%] lg:w-[85%] items-center'>
            <p className={`text-white text-[12px] cursor-pointer md:text-2xl
            ${txt === -1 ? 'text-[14px] md:text-3xl lg:text-4xl font-bold on' : ''}`} onClick={() => {setTxt(-1);}}>ALL</p>
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
              stars.map((e,i) => (
                <div
                  key={i}
                  className="absolute -top-[50px] bg-white rounded-full"
                  style={{
                    left: `${e.x}px`,
                    top: `${e.y}px`,
                    width: `${e.size}px`,
                    height: `${e.size}px`,
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
      <div className="w-[90%] flex justify-center mx-auto mt-7">
        <span onClick={toggleSlide} className="p-2 mr-5 text-xs md:text-xl text-white bg-black cursor-pointer">Slide</span>
        <span onClick={toggleGallery} className="p-2 text-xs md:text-xl text-white bg-black cursor-pointer">Gallery</span>
      </div>
      {showGallery && <Gallery stars={stars} restars={restars} />}
      </div>

      <div className="relative flex justify-center items-center w-full h-[450px] mt-10 mx-auto mb-[150px] bg-black">
        <div className="absolute left-0 transform translate-x-1/2 -translate-y-1/2 swiper-button-prev top-1/2" style={{ color: '#ddd' }} />
        <Swiper
          className="absolute top-[20%]"
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            768: {
              slidesPerView: 1.6,
            },
            1024: {
              slidesPerView: 2,
            }
          }}
          navigation={{ 
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true 
          }}
          modules={[
            EffectCoverflow,
            Pagination,
            Autoplay,
            Navigation,
            Mousewheel,
          ]}
          onSlideChange={() => {
            new WOW.WOW({
              live: false,
            }).init();
          }}
        >
        {DataFilter &&
          DataFilter.map((e, i) => (
            <SwiperSlide style={{ overflow: "hidden" }} key={i}>
              <div className='bg-white basis-1/2 h-[400px] border mb-10'>
                <div className="flex justify-start w-[95%] mx-auto text-center mt-5">
                  <img src={e.img} alt={e.title} className='mb-2 mr-7 md:w-[200px] lg:mb-5 md:mb-5 border cursor-pointer' onClick={()=>{OpenNewTab(e.URL)}} />
                  <div className="w-4/5">
                    <p className='mb-2 text-3xl font-bold'>{e.id}</p>
                    <p>{e.title}</p>
                    <div className="flex items-center mx-auto mt-5">
                      <div className="w-1/2 mt-10 text-start">
                        <p className='text-white bg-black rounded-sm w-[50px] text-center'>USE</p>
                        <p className='text-xl'>{e.desc}</p>
                        <p className='text-xl'>{e.desc2}</p>
                        <p className='text-xl'>{e.desc3}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </>
  );    
}

export default Slide;
