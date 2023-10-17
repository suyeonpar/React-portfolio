import React from 'react'

function Footer() {
  return (
    <>
    <div className='w-full h-[150px] bg-white text-center items-center leading-[150px] border-t'>
      <span className='relative w-[100%] text-5xl cursor-pointer group bg-white'>sksrbdpdy@naver.com
        <span class="absolute text-[#ddd] text-2xl h-0 bottom-[-10px] left-1/2 transform translate-x-[-50%] group-hover:bottom-[20px] h-full transition-[1s]">메일은 언제나 환영입니다.</span>
        <span className="absolute z-10 after:hidden content-none"></span>
      </span>
    </div>
    </>
  )
}

export default Footer