import React, { useState } from 'react'
import './../index.css'

function Board({ dark }) {

  const linkBoard = [
    {
      link : "https://board-next-js-dun.vercel.app/",
      img: "https://via.placeholder.com/200x200"
    }
  ]

  


  const descData = [
    {
      id: 1,
      title: "이런 기능이 있어요!",
      desc: "로그인/회원가입"
    },
    {
      id: 2,
      title: "2. 로그인 하기",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: 3,
      title: "3. 글쓰기",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ]
  
  return (
    <>
    <div className='w-full h-auto mx-auto text-center mb-10'>
      <h3 className={`text-3xl font-bold md:text-6xl ${dark ? 'text-white' : 'text-black'}`}>MINI BOARD</h3>
      <p className={`mt-4 text-sm ${dark ? `text-white` : `text-[#999]`} md:text-2xl`}>Sooo의 미니 게시판</p>
      <div className='flex flex-wrap justify-between h-full mx-auto max-w-7xl mt-5'>
        <div className='inner-custom bg-[#eee] border w-[45%] h-[200px] md:h-[600px] lg:h-[600px] mx-auto rounded-md basis-4/5 mb-5 md:basis-[48%]'>
          <img src='https://via.placeholder.com/200x200/fff' alt='사진' />
        </div>
        <div className='overflow-y-scroll w-[45%] h-[200px] md:h-[600px] lg:h-[600px] bg-[#eee] shadow-inner border mx-auto rounded-md basis-4/5 md:basis-[48%] overflow-hidden'>
          {
            descData &&
            descData.map((e,i)=>{
              return(
                <div key={i}>
                  <h3 className='text-xl md:text-2xl'>{e.title}</h3>
                  <p className='text-xs md:text-xl'>{e.desc}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
    </>
  )
}


  
export default Board