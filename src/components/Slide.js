import React, { useState } from "react";
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

    //새로운창 연결
    const OpenNewTab = (url) => {
        window.open(url, "_blank", "noopener, noreferrer");
    };

    // slide hover
    const [slideHover, setSlideHover] = useState(null);

  return (
    <>
    <div className='w-full pb-20 mx-auto'>
      <div className='mt-3 mb-2 ml-3 basis-full md:mr-2 md:mt-10  md:mb-5 lg:mb-7'>
        <p className={`text-sm md:text-xl ${dark ? 'text-white' : 'text-black'}`}>
          <span className='font-bold'>TOTAL: </span>{contentdata.length}
        </p>
      </div>
      <div className={`relative flex justify-center items-center w-full h-[450px] mx-auto mb-[150px] bg-black ${dark ? `border-t border-gray-700` : ``}`}>
        <div className="absolute left-0 transform translate-x-1/2 -translate-y-1/2 swiper-button-prev top-1/2" style={{ color: '#ddd' }} />
        <div className="absolute right-0 transform -translate-x-1/2 -translate-y-1/2 swiper-button-next top-1/2" style={{ color: '#ddd' }} />
        {<Swiper
          className='swiper-styles absolute top-[25%] transition-all duration-300'
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction : false }}
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
            <SwiperSlide
              style={{ overflow: "hidden", transition: "transform 0.3s" }}
              key={i}
              onMouseOver={() => {
                document.querySelector('.swiper-styles').swiper.autoplay.stop();
                setSlideHover(i);
              }}
              onMouseLeave={() => {
                document.querySelector('.swiper-styles').swiper.autoplay.start();
                setSlideHover(null);
              }}
              className={`bg-white border transform ${slideHover === i ? `-translate-y-52` : ``}`}
            >
              <div key={i} className='basis-[95%] md:basis-full h-auto mb-7 mx-auto relative'>
                <div className="flex flex-wrap justify-start w-[95%] mx-auto text-center mt-5">
                  <img src={e.img} alt={e.title} className='mb-2 border shadow-sm cursor-pointer basis-full md:basis-1/2 md:mr-7 md:mb-5' onClick={()=>{OpenNewTab(e.URL)}} />
                  <div className="text-start basis-full">
                    <div className='mb-2 md:mb-5'>
                      <p className='text-sm font-bold md-0 lg:mb-2 md:text-xl lg:text-2xl'>{e.id}</p>
                      <p className='text-sm md:text-xl lg:text-2xl'>{e.title}</p>
                    </div>
                    <div className='mb-2 md:mb-5'>
                      <p className='text-sm font-bold lg:mb-2 md:text-xl lg:text-2xl'>Work hours</p>
                      <p className='text-sm md:text-xl lg:text-2xl'>{e.day}</p>
                    </div>
                    <div className='mb-2 md:mb-5'>
                      <p className='text-sm font-bold lg:mb-2 md:text-xl lg:text-2xl'>Contribution</p>
                      <p className='text-sm md:text-xl lg:text-2xl'>{e.contribution}</p>
                    </div>
                    <div className='mb-0 md:mb-1 lg:mb-3'>
                      <p className='text-sm font-bold lg:mb-2 md:text-xl lg:text-2xl'>USE</p>
                      <p className='text-sm md:text-xl lg:text-2xl'>{e.desc}</p>
                      <p className='text-sm md:text-xl lg:text-2xl'>{e.desc2}</p>
                      <p className='text-sm md:text-xl lg:text-2xl'>{e.desc3}</p>
                    </div>
                  </div>
                  <div className='absolute right-2 bottom-0 md:right-3'>
                    {
                      e.nimg &&
                      <img src={e.nimg} alt='노션 이미지' onClick={()=>{OpenNewTab(e.notionURL)}} className='w-6 h-6 mb-1 md:w-8 md:h-8 cursor-pointer'/>
                    }
                    <div>
                    <FontAwesomeIcon icon={e.icon} onClick={()=>{OpenNewTab(e.gitURL)}} className='text-2xl cursor-pointer md:text-3xl' />
                    </div>
                  </div>
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