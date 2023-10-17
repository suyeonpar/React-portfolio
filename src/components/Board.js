import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Swiper, SwiperSlide   } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/navigation';
import 'swiper/css';
import React from 'react'

function Board() {

  const data = [
    {
      title : "clone cording",
      img : "https://via.placeholder.com/300x200",
      svg : faHandHoldingHeart
    },
    {
      title : "game",
      img : "https://via.placeholder.com/300x200",
      svg : faHandHoldingHeart
    },
    {
      title : "git",
      img : "https://via.placeholder.com/300x200",
      svg : faHandHoldingHeart
    },
    {
      title : "notion",
      img : "https://via.placeholder.com/300x200",
      svg : faHandHoldingHeart
    }  
  ]
  
  return (
    <>
    <div className='w-[1280px] mx-auto text-center mb-20'>
      <div className='mb-[60px]'>
        <span className='text-5xl font-bold'>무엇이 가장 인상적이었나요?</span>
        <p className='text-2xl mt-4'>의견을 남겨주세요 :{")"}</p>
      </div>
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      navigation={{clickable: true}}
      modules={[Navigation, Pagination]}
    >
      <ul className='flex justify-between w-[1280px] mx-auto'>
        {data.map((e, i) => (
          <SwiperSlide key={i}>
            <img src={e.img} alt='이미지' />
            <li>{e.title}</li>
            <FontAwesomeIcon icon={e.svg} className='' />
          </SwiperSlide>
        ))}
      </ul>
    </Swiper>
    </div>
    </>
  )
}
  
export default Board