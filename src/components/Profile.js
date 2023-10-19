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
    <div className='w-full h-auto mx-auto mt-[400px]'>
      <div className='text-center mb-10'>
      {
        down &&
        <FontAwesomeIcon icon={faArrowDown} />
      }
      </div>
      <div className='w-[1200px] mx-auto'>
        <div className="flex flex-wrap justify-around">
          <div className='w-[425px] h-[450px] bg-black rounded-2xl'></div>
          <ul className='text-justify'>
            <h3 className='mb-3 text-5xl font-bold'>About me</h3>
            <li className='mb-3 text-3xl'>디자이너에서 <span className='font-bold text-[#242424]'>개발자</span>로의 성장</li>
            <li className='text-[22px] text-[#474747] mb-5 w-[500px]'>‘디자인뿐만이 아니라 내가 직접 페이지를 구현하여 개발한다면 어떨까?’라는 생각과 욕심이 생겼고 프론트엔드 개발자라는 직업에 관심이 생겼습니다.</li>
            <li className='text-[22px] text-[#474747] mb-5 w-[500px]'>저는 프론트엔드 개발 분야에서 계속해서 성장하고, 최신 웹 개발 기술과 트렌드를 습득하고, 개발자 커뮤니티에 기여하고 프로젝트에 참여하여 지식을 공유하고 배울 것입니다.</li>
          <NavLink to='/about'><sapn className='cursor-pointer text-[20px] text-[#ddd] transition-[1s] hover:text-[#090999]'>자기소개 더 보기</sapn></NavLink>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile