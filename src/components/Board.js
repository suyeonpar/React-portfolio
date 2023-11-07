import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Swiper, SwiperSlide   } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/navigation';
import 'swiper/css';
import React, { useState } from 'react'
import './../index.css'
import { useNavigate } from 'react-router-dom';

function Board({ dark, toggleDarkMode }) {

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
  const [maxLength, setMaxLength] = useState(50);
  
  //댓글 글자수 제한
  const InputText = (Comment, setComment) => {
    if (Comment.length > maxLength) {
      setComment(Comment.slice(0, maxLength));
    }
    setInputCnt(Comment.length);
  };
  
  //댓글 작성
  const [Comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  
  const addComments = () => {
    if (Comment.length === 0) {
      alert("의견의 없나요? 자유롭게 달아주세요!");
    } else {
      alert("소중한 의견 감사합니다.");
      setComments([...comments, Comment]);
      setComment("");
    }
  };

  // 댓글삭제
  const deleteComment = (idx) => {
    const newComments = [...comments];
    newComments.splice(idx, 1);
    setComments(newComments);
  };
  
  return (
    <>
    <div className='w-full h-auto mx-auto text-center'>
      <h3 className={`text-3xl ${dark ? `text-white` : `text-black`} font-bold md:text-6xl`}>Board</h3>
      <p className={`mt-4 text-sm ${dark ? `text-white` : `text-[#999]`} md:text-2xl`}>의견을 남겨주세요 :{")"}</p>
      <div className='flex flex-wrap justify-between mx-auto mt-10 max-w-7xl'>
        <div className="h-28 md:h-40 bg-white border rounded-md basis-[59%] mb-5 mx-auto md:basis-1/2">
          <div className='bg-white border-b basis-full md:basis-1/2 overflow-y-scroll'>
            {
              comments &&
              comments.map((Comment,i)=>{
                return(
                  <div key={i} className='p-2 items-center flex text-start justify-around mb-2 text-xs md:text-xl'>
                    <p className='mr-5'>{Comment}</p>
                    <button onClick={deleteComment} className='bg-black w-12 h-5 border-gray-100 rounded-md text-white'>삭제</button>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='flex flex-col items-center justify-center mx-auto mb-20 text-center max-w-7xl '>
          <div className='mx-auto max-w-7xl'>
            <textarea
              rows="5"
              cols="40"
              maxLength={maxLength}
              className="p-2 text-black text-xs md:text-xl placeholder-gray-400 border rounded textarea"
              placeholder="의견 작성하기."
              value={Comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></textarea>
            <p className={`${dark ? `text-white` : ``} pb-2`}>{Comment.length}/{maxLength}자</p>
            <button className={`p-2 text-sm border rounded-md text-white bg-black md:text-xl ${dark ? `border-[#ddd] bg-[#5E5BE3]` : ``}`} onClick={addComments}>작성하기</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
  
export default Board