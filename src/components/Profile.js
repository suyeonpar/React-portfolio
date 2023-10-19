import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Profile() {

  //arrow
  const [down, setDown] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDown(true);
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <>
    <div className='w-full h-auto mx-auto mt-[200px]'>
      <div className='mb-10 text-center'>
      {/* {
        down &&
        <FontAwesomeIcon icon={faArrowDown} />
      } */}
      </div>
      <div className='w-[1200px] mx-auto'>
        <div className="flex flex-wrap justify-around">
          <img src='/images/profile2.jpeg' alt='프로필' className='w-[430px] h-[450px] rounded-lg' />
          <ul className='text-justify'>
            <h3 className='mb-3 text-5xl font-bold'>Who Am I ?</h3>
            <li className='text-3xl mb-7'>저는 프론트엔드 개발자로의 <sapn className='text-[#5E5BE3] text-4xl font-bold'>도전 </sapn>을 즐깁니다.</li>
            <li className='text-[22px] text-[#636363] mb-5 w-[500px]'>끊임없이 도전하며 자기계발을 추구하고, 항상 더 나은 개발자로 성장하려는 열망을 가지고 있습니다.</li>
            <li className='text-[22px] text-[#636363] mb-5 w-[500px]'>사용자 경험을 개선하고 웹 애플리케이션을 만드는 것을 좋아하며,</li>
            <li className='text-[22px] text-[#636363] mb-5 w-[500px]'>빠르게 변화하는 기술 트렌드를 따라가고, 항상 학습과 개선에 열린 자세를 유지합니다.</li>
          <NavLink to='/about'><sapn className='cursor-pointer text-[20px] text-[#ddd] transition-[1s] hover:text-[#090999]'>자기소개 더 보기</sapn></NavLink>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile