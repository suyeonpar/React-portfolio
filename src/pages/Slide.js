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


function Slide({dark, stars }) {

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

  return (
    <>
    <div className='w-full mt-[150px] pb-20 mx-auto'>
      <p className={`mb-20 text-3xl ${dark ? `text-white` : `text-black`} font-bold text-center md:text-6xl`}>WORK</p>
      <div className={`h-[40px] w-[60%] leading-[40px] bg-[#010b1a] border rounded-md overflow-hidden relative text-center mx-auto ${dark ? `border-gray-200` : ``} md:h-[60px] w-[40%]`}>
        <div className='flex w-60 h-full justify-between mx-auto md:w-[80%] items-center'>
        <p className={`text-white text-sm cursor-pointer md:text-2xl
        ${txt === -1 ? 'text-xl md:text-3xl font-bold on' : ''}`} onClick={() => {
          setTxt(-1);
        }
        }>ALL</p>
        {
          FilterId.map((e,i)=>{
            return(
              <p className={`text-white text-sm leading-[60px] text-on cursor-pointer md:text-2xl
              ${txt === i ? 'text-xl md:text-3xl font-bold on' : ''}`}
               onClick={()=>{
               setTxt(i)
              }}>{e}</p>
            )
          })
        }
        </div>
        <div className='relative h-full custom-spin-animation'> 
        {
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
      </div>
      <div className="relative flex w-full h-[500px] items-center mt-[50px] mx-auto mb-[150px] bg-black">
        <div className="absolute left-0 transform -translate-y-1/2 swiper-button-prev top-1/2" style={{ color: '#ddd' }} />
        <div className="absolute right-0 transform -translate-y-1/2 swiper-button-next top-1/2" style={{ color: '#ddd' }} />
        <Swiper
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
        {
          DataFilter.map((e,i)=>{
              return(
              <SwiperSlide style={{ overflow: "hidden" }} key={i}>
                <ul className='bg-white cursor-pointer basis-1/2' onClick={()=>{OpenNewTab(e.URL)}}>
                  <li className='text-3xl font-bold'>{e.id}</li>
                  <div className='flex justify-between'>
                    <li>{e.day}</li>   
                  </div>
                  <img src={e.img} alt={e.title} className='mb-5 border rounded-lg' />
                  <li className='text-white bg-black rounded-sm w-[50px] text-center'>USE</li>
                  <li className='text-xl'>{e.desc}</li>
                  <li className='text-xl'>{e.desc2}</li>
                  <li className='text-xl'>{e.desc3}</li>   
                </ul>
              </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </div>
    </>
  );    
}

export default Slide;
