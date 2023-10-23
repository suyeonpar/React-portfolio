import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Swiper, SwiperSlide   } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/navigation';
import 'swiper/css';
import React, { useState } from 'react'
import './../index.css'
import { useNavigate } from 'react-router-dom';

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
  
  const [InputCnt, setInputCnt] = useState(0);
  const navigate = useNavigate();
  const maxLength = 50;

  //댓글 글자수 제한
  const InputText = (Comment, setComment) => {
    if (Comment.length >= maxLength) {
      setComment(Comment.slice(0, maxLength));
    }
    setInputCnt(Comment.length - 1);
  };
  console.log()
  
  //댓글 작성
  const [Comment, setComment] = useState("");
  
  const addComments = () => {
    // 여기에 댓글 작성 로직을 추가합니다.
    // comment 상태 변수를 사용하여 작성된 댓글을 가져올 수 있습니다.
    console.log('작성된 댓글:', Comment);
    // 댓글 작성 로직을 추가하세요.
  };
  
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
      autoplay={true}
    
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
    <div className='mx-auto max-w-7xl'>
      <p>{Comment.length}/{maxLength}자</p>
      <textarea
        rows="3"
        cols="33"
        maxLength={maxLength - 1}
        className="p-2 text-black placeholder-gray-400 border rounded textarea"
        placeholder="의견을 남겨주세요."
        value={Comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      ></textarea>
      <button className='p-3 text-white bg-black' onClick={addComments}>작성하기</button>
    </div>
    {/* <span className='relative text-3xl group'>sksrbdpdy@naver.com
      <span className='absolute group hidden group-hover:block top-7 left-[50%] text-[#ddd] text-xl'>메일은 환영입니다 🙌</span>
    </span> */}
    </div>
    </>
  )
}
  
export default Board