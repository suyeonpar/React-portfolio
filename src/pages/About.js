import React, { useEffect } from 'react'
import Header from '../components/Header'
import WOW from 'wowjs';
import 'animate.css';

function About() {

    useEffect(()=>{
        new WOW.WOW({
          boxClass: "wow",
          animateCladd: "animate__animated",
          live: false,
          mobile: true
        }).init();
      },[])
   
  return (
    <>
    <Header />
    <div className='w-full h-auto mx-auto mt-[200px]'>
      <p className='text-center pb-20 text-5xl wow animate__fadeInUp' data-wow-duration="1.5s">안녕하세요. 개발자 <span className='font-bold text-[#5E5BE3]'>박수연</span>입니다.</p>
      <div className='w-[1200px] mx-auto'>
        <div className="flex flex-wrap justify-around">
          <img src="/images/profile2.jpeg" alt='프로필 사진' className='border shadow-lg rounded-2xl w-[425px] h-[450px]'/>
          <ul className='text-justify border-b '>
            <li className='text-[22px] text-[#474747] mb-5 w-[500px]'>‘디자인뿐만이 아니라 내가 직접 페이지를 구현하여 개발한다면 어떨까?’라는 생각과 욕심이 생겼고 프론트엔드 개발자라는 직업에 관심이 생겼습니다.</li>
            <li className='text-[22px] text-[#474747] mb-5 w-[500px]'>저는 프론트엔드 개발 분야에서 계속해서 성장하고, 최신 웹 개발 기술과 트렌드를 습득하고, 개발자 커뮤니티에 기여하고 프로젝트에 참여하여 지식을 공유하고 배울 것입니다.</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default About