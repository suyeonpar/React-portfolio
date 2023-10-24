import { faBox, faChevronDown, faCopyright, faGamepad, faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useEffect, useState } from 'react'
import '../index.css'; 
import contentdata from '../data/ContentData'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

function Content({Stars, stars, dark, toggleDarkMode }) {
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

  //새로운창
  
  //새로운창 연결
  const OpenNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  //swiper
  // const SwiperComponent = () => {
  //   const swiperRef = useRef(null);
  
  //   useEffect(() => {
  //     if (swiperRef.current) {
  //       swiperRef.current.swiper.update();
  //     }
  //   }, [])};
  

  return (
    <>
    <div className='w-full mt-[150px] pb-20 mx-auto'>
      <p className={`mb-20 text-3xl ${dark ? `text-white` : `text-black`} font-bold text-center md:text-6xl`}>WORK</p>
      <div className={`w-[60%] bg-[#010b1a] ${dark ? `border-[#ddd]` : `border-none`} h-[60px] overflow-hidden relative text-center leading-[70px] mx-auto sm:w-[500px]`}>
        <div className='flex justify-between mx-auto md:w-[80%]'>
        <p className={`text-white text-2xl leading-[60px] cursor-pointer
        ${txt === -1 ? 'text-4xl font-bold on' : ''}`} onClick={() => {
          setTxt(-1);
        }
        }>ALL</p>
        {
          FilterId.map((e,i)=>{
            return(
              <p className={`text-white text-2xl leading-[60px] text-on cursor-pointer
              ${txt === i ? 'text-3xl font-bold on' : ''}`}
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
      <div className='max-w-7xl mx-auto flex flex-wrap py-[2%] justify-around'>
        {
          DataFilter.map((e,i)=>{
            return(
            <div className='mt-10'>
              <ul key={i} className='pr-3 bg-white cursor-pointer basis-full' onClick={()=>{OpenNewTab(e.URL)}}>
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
            </div>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default Content