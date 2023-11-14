import React, { useEffect, useState } from 'react'

function Use({dark}) {

  const descData = [
    {
      id: 1,
      title: "1. 회원가입 하기",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
 console.log(descData[0])
  return (
    <>
    <div className='w-full mx-auto mt-6 mb-20 md:mt-24'>
        <h3 className={`text-3xl mb-2 md:mb-5 text-black font-bold text-center md:text-6xl ${dark ? `text-white` : ``}`}>MINI BOARD</h3>
        <p className={`text-center text-sm mb-5 ${dark ? `text-white` : `text-[#999]`} md:text-2xl`}>미니 보드 만들기</p>
      <div className='flex flex-wrap justify-between h-full mx-auto max-w-7xl'>
        <div className='inner-custom bg-[#eee] border w-[45%] h-[200px] md:h-[600px] lg:h-[600px] mx-auto rounded-md basis-4/5 mb-5 md:basis-[48%]'>
          <img src='https://via.placeholder.com/200x200/fff' alt='사진' />
        </div>
        <div className='overflow-y-scroll w-[45%] h-[200px] md:h-[600px] lg:h-[600px] bg-[#eee] shadow-inner border mx-auto rounded-md basis-4/5 md:basis-[48%] overflow-hidden'>
          {
            descData &&
            descData.map((e,i)=>{
              return(
                <div key={i}>
                  <h3 className='text-2xl md:text-3xl'>{e.title}</h3>
                  <p className='text-xl md:text-2xl'>{e.desc}</p>
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

export default Use