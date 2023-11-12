import React, { useEffect, useRef, useState } from "react";
import { createStars } from './../store';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import WOW from "wowjs";
import "animate.css";
import contentdata from '../data/ContentData'
import 'swiper/swiper-bundle.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Slide({ dark }) {
  
  const [showSwiper, setShowSwiper] = useState(false);


    //새로운창 연결
    const OpenNewTab = (url) => {
        window.open(url, "_blank", "noopener, noreferrer");
    };

  // 마우스오버 이벤트
  const handleMouseOver = () => {
    Swiper.autoplay.stop();
  };
  
  const handleMouseOut = () => {
    Swiper.autoplay.start();
  };

  return (
    <>
    <div className='w-full pb-20 mx-auto'>
      <div className='mt-5 mb-2 ml-3 basis-full md:mr-2 md:mt-10 md:mb-5'>
        <p className={`text-sm md:text-xl ${dark ? 'text-white' : 'text-black'}`}>
          <span className='font-bold'>TOTAL: </span>{contentdata.length}
        </p>
      </div>
      <div className="relative flex justify-center items-center w-full h-[450px] mx-auto mb-[150px] bg-black">
        <div className="absolute left-0 transform translate-x-1/2 -translate-y-1/2 swiper-button-prev top-1/2" style={{ color: '#ddd' }} />
        <div className="absolute right-0 transform -translate-x-1/2 -translate-y-1/2 swiper-button-next top-1/2" style={{ color: '#ddd' }} />
        {<Swiper
          className='absolute top-[20%]'
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{ delay: 4000, disableOnInteraction : false }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
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
        {
          contentdata.map((e, i) => (
            <SwiperSlide style={{ overflow: "hidden" }} key={i}>
              <div key={i} className='bg-white basis-[95%] md:basis-full h-auto border mb-10 mx-auto relative'>
                <div className="flex flex-wrap justify-start w-[95%] mx-auto text-center mt-5">
                  <img src={e.img} alt={e.title} className='mb-2 border shadow-sm cursor-pointer basis-full md:basis-1/2 md:mr-7 md:mb-5' onClick={()=>{OpenNewTab(e.URL)}} />
                  <div className="text-start basis-full">
                    <div className='mb-2 md:mb-5'>
                      <p className='text-sm font-bold md-0 md:mb-2 md:text-2xl'>{e.id}</p>
                      <p className='text-sm md:text-2xl'>{e.title}</p>
                    </div>
                    <div className='mb-2 md:mb-5'>
                      <p className='text-sm font-bold md:text-2xl'>Work hours</p>
                      <p className='text-sm md:text-2xl'>{e.day}</p>
                    </div>
                    <div className='mb-2 md:mb-5'>
                      <p className='text-sm font-bold md:text-2xl'>USE</p>
                      <p className='text-sm md:text-2xl'>{e.desc}</p>
                      <p className='text-sm md:text-2xl'>{e.desc2}</p>
                      <p className='text-sm md:text-2xl'>{e.desc3}</p>
                    </div>
                  </div>
                  <FontAwesomeIcon icon={e.icon} onClick={()=>{OpenNewTab(e.gitURL)}} className='absolute text-2xl cursor-pointer bottom-2 right-2 md:bottom-7 md:right-7 md:text-3xl' />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>}
      </div>
    </div>
    </>
  );    
}

export default Slide;