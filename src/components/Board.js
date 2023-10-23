import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Swiper, SwiperSlide   } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/navigation';
import 'swiper/css';
import React from 'react'
import './../index.css'

function Board() {

  const data = [
    {
      title : "clone cording",
      img : "https://via.placeholder.com/300x200"
    },
    {
      title : "game",
      img : "https://via.placeholder.com/300x200"
    },
    {
      title : "git",
      img : "https://via.placeholder.com/300x200"
    },
    {
      title : "notion",
      img : "https://via.placeholder.com/300x200"
    }, 
    {
      title : "notion",
      img : "https://via.placeholder.com/300x200"
    }, 
    {
      title : "notion",
      img : "https://via.placeholder.com/300x200"
    }
  ]
  
  return (
    <>
    <div className='w-[1280px] mx-auto text-center mb-20'>
      <div className='mb-[60px]'>
        <span className='text-5xl font-bold'>Board</span>
        <p className='mt-4 text-2xl'>의견을 남겨주세요 :{")"}</p>
      </div>
      <Swiper className='swiper'
      slidesPerView={3}
      centeredSlides= {true}
      // navigation={{clickable: true}}
      // modules={[Navigation]}
    >
    <ul className='flex justify-between w-[1280px] mx-auto'>
      {data.map((e, i) => (
        <SwiperSlide key={i}>
          <img src={e.img} alt='이미지' />
          <li>{e.title}</li>
        </SwiperSlide>
      ))}
    </ul>
    </Swiper>
    <span className='text-3xl'>sksrbdpdy@naver.com</span>
    </div>
    <div>
      <p>의견을 남겨주세요 :{")"}</p>
    </div>
    </>
  )
}
  
export default Board