import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './../index.css'

function Profile({ dark }) {

  return (
    <>
    <div className='w-full mt-48 md:mt-60'>
    <div className='flex flex-wrap justify-around mx-auto max-w-7xl'>
      <img src='/images/profile.jpg' alt='프로필' className='mb-10 rounded-lg shadow-lg w-[70%] md:basis-2/5 md:w-auto' id='profile' />
        <div className=''>
          <ul className='mx-auto text-justify md:basis-full'>
            <li className={`mb-3 text-center text-3xl font-bold ${dark ? `text-white` : `text-black`} md:text-start md:text-6xl`}>Who Am I ?</li>
            <li className={`text-center text-md md:text-3xl ${dark ? `text-white` : `text-black`} mb-7 md:text-start md:w-full`}>저는 프론트엔드 개발자로의 <span className='text-[#5E5BE3] text-xl font-extrabold md:text-[35px]'>도전</span> 을 즐깁니다.</li>
            <li className={`text-xs mb-2 w-[79%] mx-auto ${dark ? `text-[#d4d4d4]` : `text-[#636363]`} md:mb-7 md:w-[620px] md:text-2xl`}>끊임없이 도전하면서 자기계발을 추구하고, 항상 더 나은 개발자로 성장하려는 열망을 가지고 있습니다.</li>
            <li className={`text-xs mb-2 w-[79%] mx-auto ${dark ? `text-[#d4d4d4]` : `text-[#636363]`} md:mb-5 md:w-[620px] md:text-2xl`}>사용자 경험을 개선하고 웹 애플리케이션을 만드는 것을 좋아하며,</li>
            <li className={`text-xs md:mb-5 w-[79%] mx-auto mb-1 ${dark ? `text-[#d4d4d4]` : `text-[#636363]`} md:mb-7 md:w-[622px] md:text-2xl`}>빠르게 변화하는 기술 트렌드를 따라가면서, 항상 학습과 개선에 열린 자세를 유지합니다.</li>
            <li className={`text-xs md:mb-5 w-[79%] mx-auto mb-1 ${dark ? `text-[#d4d4d4]` : `text-[#636363]`} md:mb-7 md:w-[622px] md:text-2xl`}>저는 <span className='text-sm font-bold text-[#8180e8] md:text-3xl'>React, Next.js Javascript</span>에 자신있습니다.</li>
            <NavLink to='/about'><li className='mt-2 md:mt-3 cursor-pointer ml-[53px] text-xs text-[#ddd] transition-[1s] hover:text-[#5E5BE3] md:text-2xl md:ml-0'>자기소개 더 보기</li></NavLink>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile