import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './../index.css'

function Profile({ dark }) {

  //arrow
  //const [down, setDown] = useState(false);

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     setDown(true);
  //   }, 3000);

  //   return () => {
  //     clearTimeout(timerId);
  //   };
  // }, []);

  return (
    <>
    <div className='w-full mt-60'>
    <div className='flex flex-wrap justify-around mx-auto max-w-7xl'>
      <img src='/images/profile.jpg' alt='프로필' className='mb-10 rounded-lg shadow-lg md:basis-2/5 md:w-auto' id='profile' />
        <div className=''>
          <ul className='basis-[40%] md:basis-full text-justify'>
            <h3 className={`mb-3 text-3xl text-center font-bold ${dark ? `text-white` : `text-black`} md:text-start md:text-6xl`}>Who Am I ?</h3>
            <li className={`text-xl md:text-3xl ${dark ? `text-white` : `text-black`} mb-7`}>저는 프론트엔드 개발자로의 <span className='text-[#5E5BE3] text-2xl font-extrabold md:text-[35px]'>도전</span>을 즐깁니다.</li>
            <li className={`text-sm ${dark ? `text-[#d4d4d4]` : `text-[#636363]`} mb-5 w-[500px] md:text-2xl`}>끊임없이 도전하며 자기계발을 추구하고, 항상 더 나은 개발자로 성장하려는 열망을 가지고 있습니다.</li>
            <li className={`text-sm ${dark ? `text-[#d4d4d4]` : `text-[#636363]`} mb-5 w-[500px] md:text-2xl`}>사용자 경험을 개선하고 웹 애플리케이션을 만드는 것을 좋아하며,</li>
            <li className={`text-sm ${dark ? `text-[#d4d4d4]` : `text-[#636363]`} mb-7 w-[500px] md:text-2xl`}>빠르게 변화하는 기술 트렌드를 따라가고, 항상 학습과 개선에 열린 자세를 유지합니다.</li>
            <NavLink to='/about'><span className='cursor-pointer text-sm text-[#ddd] transition-[1s] hover:text-[#5E5BE3] md:text-2xl'>자기소개 더 보기</span></NavLink>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile