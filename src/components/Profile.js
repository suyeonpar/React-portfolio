import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Profile() {

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
    <div className='w-full h-auto mx-auto mt-60'>
      <div className='flex items-center w-full mx-auto flex-wrap max-w-7xl'>
        <div className="flex flex-wrap justify-center mx-auto basis-full md:basis-2/4">
          <img src='/images/profile.jpg' alt='프로필' className='basis-[49%] object-cover rounded-lg shadow-lg sm:basis-1/2' />
          <div className='basis-full sm:basis-1/2'>
            <ul className='text-justify basis-full sm:basis-1/2'>
              <h3 className='text-5xl font-bold text-start md:mb-3'>Who Am I ?</h3>
              <li className='text-xl sm:text-[22px] mb-7 xl:text-2xl'>저는 프론트엔드 개발자로의 <span className='text-[#5E5BE3] text-3xl font-extrabold sm:text-[35px]'>도전</span>을 즐깁니다.</li>
              <li className='text-xl text-[#636363] mb-5 w-[500px]'>끊임없이 도전하며 자기계발을 추구하고, 항상 더 나은 개발자로 성장하려는 열망을 가지고 있습니다.</li>
              <li className='text-xl text-[#636363] mb-5 w-[500px]'>사용자 경험을 개선하고 웹 애플리케이션을 만드는 것을 좋아하며,</li>
              <li className='text-xl text-[#636363] mb-5 w-[500px]'>빠르게 변화하는 기술 트렌드를 따라가고, 항상 학습과 개선에 열린 자세를 유지합니다.</li>
              <NavLink to='/about'><span className='cursor-pointer text-[20px] text-[#ddd] transition-[1s] hover:text-[#090999]'>자기소개 더 보기</span></NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile