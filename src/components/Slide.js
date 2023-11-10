import React, { useEffect, useState } from "react";
import { createStars } from './../store';
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  EffectCoverflow
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import WOW from "wowjs";
import "animate.css";
import contentdata from '../data/ContentData'
import { NavLink } from 'react-router-dom';
import 'swiper/swiper-bundle.css';

function Slide({ dark }) {

  //필터
  const txtList = ["Project", "Clone", "API", "Game"];
  const [txt, setTxt] = useState(-1);
  const FilterId = [...new Set(contentdata.map(e => e.id))];
  const [DataFilter, setDataFilter] = useState([]);

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
  const [autoPlay, setAutoPlay] = useState(true)
  console.log(autoPlay)

  const onMouseOver = () => {
    setAutoPlay(false)
  };

  const onMouseLeave = () => {
    setAutoPlay(true)
  };

  // 별
  const Stars = 2000;
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(800);
  const [rewidth, setReWidth] = useState(1920);
  const [reheight, setReHeight] = useState(-800);

  const [stars, setStars] = useState([]);
  const [restars, setRestars] = useState([]);

  useEffect(() => {
    const { stars, restars } = createStars(Stars, width, height, rewidth, reheight);
    setStars(stars);
    setRestars(restars);
  }, [Stars, width, height, rewidth, reheight]);

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
      </div>
      <p className='text-xl md:text-2xl'><span className='font-bold'>TOTAL: </span>{DataFilter.length}</p>
      <div className="relative flex justify-center items-center w-full h-[450px] mt-10 mx-auto mb-[150px] bg-black">
        <div className="absolute left-0 transform translate-x-1/2 -translate-y-1/2 swiper-button-prev top-1/2" style={{ color: '#ddd' }} />
        <div className="absolute right-0 transform -translate-x-1/2 -translate-y-1/2 swiper-button-next top-1/2" style={{ color: '#ddd' }} />
        <Swiper
          className='absolute top-[20%]'
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          // autoplay={{ delay: 2000, disableOnInteraction : false }}
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
            Autoplay,
            Navigation
          ]}
          onSlideChange={() => {
            new WOW.WOW({
              live: false,
            }).init();
          }}
        >
        {DataFilter &&
          DataFilter.map((e, i) => (
            <SwiperSlide style={{ overflow: "hidden" }} key={i} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
              <div key={i} className='bg-white basis-4/5 md:basis-full h-auto border mb-10 mx-auto'>
                <div className="flex flex-wrap justify-start w-[95%] mx-auto text-center mt-5">
                  <img src={e.img} alt={e.title} className='mb-2 basis-full md:w-[200px] md:basis-2/3 md:mr-7 md:mb-5 border cursor-pointer shadow-sm' onClick={()=>{OpenNewTab(e.URL)}} />
                  <div className="text-start">
                    <div className='mb-2 md:mb-5'>
                      <p className='md-0 md:mb-2 text-sm md:text-2xl font-bold'>{e.id}</p>
                      <p className='text-sm md:text-2xl'>{e.title}</p>
                    </div>
                    <div className='mb-2 md:mb-5'>
                      <p className='font-bold text-sm md:text-2xl'>Work hours</p>
                      <p className='text-sm md:text-2xl'>{e.day}</p>
                    </div>
                    <div className='mb-2 md:mb-5'>
                      <p className='text-sm md:text-2xl font-bold'>USE</p>
                      <p className='text-sm md:text-2xl'>{e.desc}</p>
                      <p className='text-sm md:text-2xl'>{e.desc2}</p>
                      <p className='text-sm md:text-2xl'>{e.desc3}</p>
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