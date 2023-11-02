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

function Slide({dark, stars, restars}) {

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
    <div className='w-full pb-20 mx-auto'>
      <div className="w-[90%] flex justify-end">
        <span onClick={toggleSlide} className="p-2 mr-5 text-xl text-white bg-black cursor-pointer">Slide</span>
        <span onClick={toggleGallery} className="p-2 text-xl text-white bg-black cursor-pointer">Gallery</span>
        {showGallery && <Gallery />}
      </div>
      <div className="relative flex w-full h-[450px] items-center mt-20 mx-auto mb-[150px] bg-black">
        <div className="absolute left-0 transform translate-x-1/2 -translate-y-1/2 swiper-button-prev top-1/2" style={{ color: '#ddd' }} />
        <Swiper className="absolute top-[20%]"
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
          DataFilter &&
          DataFilter.map((e,i)=>{
              return(
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
