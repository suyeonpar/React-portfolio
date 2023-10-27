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


function Slide({dark, stars, restars }) {

  //필터
  const txtList = ["Project", "Clone", "API", "Game"];
  const [txt, setTxt] = useState(-1);
  const FilterId = [...new Set(contentdata.map(e => e.id))];
  const [DataFilter, setDataFilter] = useState([]);

  // 만약 txtList 값이 많아진다면??
  useEffect(() => {
    if (txt === -1) {
      const random = Math.floor(Math.random() * contentdata.length)
      const DataRandom = contentdata[random]
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

    useEffect(()=>{
      if( mouseOver === true){
        
      }

    })

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
        <div className='relative custom-spin-animation2'> 
        {
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
      <div className="relative flex w-full h-[450px] items-center mt-20 mx-auto mb-[150px] bg-black">
        <div className="absolute left-0 transform translate-x-1/2 -translate-y-1/2 swiper-button-prev top-1/2" style={{ color: '#ddd' }} />
        <div className="absolute right-0 transform -translate-x-1/2 -translate-y-1/2 swiper-button-next top-1/2" style={{ color: '#ddd' }} />
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
          DataFilter.map((e,i)=>{
              return(
              <SwiperSlide style={{ overflow: "hidden" }} key={i}>
                <div className='bg-white basis-1/2 h-[400px] border mb-10'>
                  <div className="flex justify-start w-[95%] mx-auto text-center mt-5">
                    <img src={e.img} alt={e.title} className='mb-2 mr-7 md:w-[200px] lg:mb-5 md:mb-5 border cursor-pointer' onClick={()=>{OpenNewTab(e.URL)}} />
                    <div className="w-4/5">
                      <p className='mb-2 text-3xl font-bold'>{e.id}</p>
                      <p>{e.title}</p>
                      <div className="flex items-center mt-5 mx-auto">
                        <div className="w-1/2 text-start mt-10">
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
