import React, { useEffect } from 'react'
import Header from '../components/Header'
import WOW from 'wowjs';
import 'animate.css';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faList } from '@fortawesome/free-solid-svg-icons';
import './../index.css'
import { NavLink } from 'react-router-dom';

function About() {

  useEffect(()=>{
    new WOW.WOW({
      boxClass: "wow",
      animateCladd: "animate__animated",
      live: false,
      mobile: true
    }).init();
  },[])
   
  const data = [
    {
      title: "SKILL",
      desc: "제가 자신있는것은요",
      desc2: ["HTML5", "CSS3", "TailwindCSS", "SCSS", "React", "node.js", "AdobePhotoshop CS6", "AdobeIllustrator 2020"],
      desc3 : [""]
    },
    {
      title: "Collaboration & Tools ",
      desc: "제가 자신있는 협업툴은요",
      desc2: ["figma", "slack", "npm", "yarn", "Git", "Github", "Notion", "Vercel"],
      desc3 : [""]
    },
    {
      title : "EDUCTION",
      desc : "제가 배운것은요",
      desc2 : ["그린 컴퓨터아트학원", "그린 온라인 캠프", "Team project"],
      desc3 : ["2023.06.28 ~", "2023.06.28 ~", "2023.06.28 ~"]
    }
  ]

  const EDUCTION = ["2023.06.28 ~", "2023.06.28 ~", "2023.06.28 ~"]

  const iconArray = [{faList},{faList},{faList}];
  console.log(iconArray)
  
  return (
    <>
    <Header />
    <div className='w-full h-auto mx-auto mt-[200px]'>
      <p className='pb-20 text-5xl text-center wow animate__fadeInUp' data-wow-duration="1.5s">안녕하세요. 개발자 <span className='font-bold text-[#5E5BE3]'>박수연</span>입니다.</p>
      <div className='flex w-[1280px] mx-auto pb-20'>
        <div className="flex flex-wrap justify-around w-full">
          <img src="/images/profile.jpg" alt='프로필 사진' className='border shadow-lg rounded-2xl w-[425px] h-[450px]' id='profile'/>
          <ul className='text-justify border-b'>
          <li className='mb-10 text-3xl'>디자이너에서 <span className='font-bold text-[#242424]'>개발자</span>로의 성장</li>
            <li className='text-[22px] text-[#474747] mb-5 w-[500px]'>‘디자인뿐만이 아니라 내가 직접 페이지를 구현하여 개발한다면 어떨까?’라는 생각과 욕심이 생겼고 프론트엔드 개발자라는 직업에 관심이 생겼습니다.</li>
            <li className='text-[22px] text-[#474747] mb-5 w-[500px]'>저는 프론트엔드 개발 분야에서 계속해서 성장하고, 최신 웹 개발 기술과 트렌드를 습득하고, 개발자 커뮤니티에 기여하고 프로젝트에 참여하여 지식을 공유하고 배울준비가 되어있습니다.</li>
            <span className='w-[100%] text-3xl cursor-pointer group relative'>sksrbdpdy@naver.com
            <span class="absolute hidden truncate text-[#ddd] text-xl top-10 left-1/2 transform translate-x-[-50%] group-hover:block transition-[1s]">메일은 언제나 환영입니다. :{')'}</span>
            </span>
          </ul>
        </div>
      </div>
      <div className='flex flex-wrap mx-auto w-[85%] justify-between'>
        {
          iconArray.map((e,i)=>{
            return(
              <FontAwesomeIcon icon={e} key={i} />
            )
          })
        }
        {
          data.map((e,i)=>{
            return(
              <ul key={i} className='pb-20 mb-3 border-b basis-full flex-wrap border-[#707070]'>
                <li className='mb-3 text-3xl font-bold'>{e.title}</li>
                <li className='text-[20px] mb-10'>{e.desc}</li>
                {Array(e.desc2.length).fill().map((_,index)=>{
                  return (
                    <span key={i} className='p-1 mr-2 border border-[#5E5BE3] rounded-lg cursor-pointer'>{e.desc2[index]}</span>
                  )
                })}
                {
                  Array(e.desc3.length).fill().map((_,i)=>{
                    return(
                      <p key={i}>{e.desc3[i]}</p>
                    )
                  })
                }
              </ul>
            )
          })
        }
      </div>
      <div className='w-full mb-5 text-end'>
      <NavLink to='/'><span className='p-10 text-2xl'>Back</span></NavLink>
      </div>
      </div>
    <Footer />
    </> 
  )
}

export default About