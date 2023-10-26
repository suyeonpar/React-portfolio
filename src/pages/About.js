import React, { useEffect } from 'react'
import Header from '../components/Header'
import WOW from 'wowjs';
import 'animate.css';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faList } from '@fortawesome/free-solid-svg-icons';
import './../index.css'
import { NavLink, useNavigate } from 'react-router-dom';

function About({ dark, toggleDarkMode }) {

  const navigate = useNavigate();
  
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
      title: "WORK EXPERIENCE",
      desc: "제가 경험한 것은요",
      desc2: ["Allendino 남성쇼핑몰", "of the days 여성 쇼핑몰", "오늘미술학원"],
      desc3 : ["2020-111111", "2020-111111", "2020-111111"]
    },
    {
      title: "SKILL",
      desc: "제가 자신 있는 것은요",
      desc2: ["HTML5", "CSS3", "TailwindCSS", "SCSS", "React", "node.js", "TypeScript", "Next.js", "AdobePhotoshop CS6", "AdobeIllustrator 2020"],
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
      desc2 : ["그린 컴퓨터아트학원 - 2023.06.28 ~", "그린 온라인 캠프 - 2023.09.06 ~ 2023.10.06", "스터디 Toy project - 2023.10.12 ~"],
      desc3 : [""]
    }
  ]
  
  return (
    <>
    <Header dark={dark} toggleDarkMode={toggleDarkMode} />
    <div className={`w-full mx-auto pt-[120px] md:pt-[180px] lg:pt-[200px] ${dark ? `bg-[#010b1a]` : `bg-white`}`}>
      <p className={`pb-5 md:pb-10 text-2xl ${dark ? `text-white` : `text-black`} text-center md:text-4xl lg:text-5xl wow animate__fadeInUp`} data-wow-duration="1.5s">안녕하세요. 개발자 <span className='text-3xl font-bold text-[#5E5BE3] md:text-5xl lg:text-6xl'>박수연</span> 입니다.</p>
      <div className='flex mx-auto md:mb-20 max-w-7xl'>
        <div className="flex flex-wrap justify-between mx-auto text-center">
          <ul className='mx-auto pb-7 text-center text-justify border-b basis-[78%] md:pb-10 md:basis-full'>
            <li className={`mb-5 ${dark ? `text-[#bdbdbd]` : `text-black`} text-xl text-center md:text-3xl lg:text-4xl md:mb-10`}>디자이너에서 <span className={`font-bold ${dark ? `text-[#ddd]`: ``} text-[#242424]`}>개발자 </span>로의 성장</li>
            <li className={`text-xs mb-5 md:text-xl md:w-4/5 md:mx-auto lg:w-full lg:text-2xl ${dark ? `text-[#e6e6e6]` : ``}`}>‘디자인뿐만이 아니라 내가 직접 페이지를 구현하여 개발한다면 어떨까?’ 저는 그림에서 현실로의 변화를 만들어냅니다."</li>
            <li className={`text-xs mb-5 md:text-xl md:w-4/5 md:mx-auto lg:w-full lg:text-2xl ${dark ? `text-[#e6e6e6]` : ``}`}>저는 프론트엔드 개발 분야에서 계속해서 성장하고 최신 웹 개발 기술과 트렌드를 습듭합니다.</li>
            <li className={`text-xs mb-5 md:text-xl md:w-4/5 md:mx-auto lg:w-full lg:text-2xl md:mb-10 ${dark ? `text-[#e6e6e6]` : ``}`}>개발자 커뮤니티에 기여하고 프로젝트에 참여하여 지식을 공유하고 배울준비가 되어있습니다.</li>
            <span className={`w-[100%] text-sm ${dark ? `text-[#b3b3b3]` : ``} cursor-pointer group relative md:text-2xl md:ml-[9.7%] lg:text-3xl lg:ml-0`}>sksrbdpdy@naver.com
            <span class="absolute top-6 text-sm hidden truncate text-[#ddd] md:top-8 lg:top-10 left-1/2 transform translate-x-[-50%] group-hover:block transition-[1s] md:text-2xl top-10">메일은 언제나 환영입니다. :{')'}</span></span>
          </ul>
        </div>
      </div>
      <div className='justify-start mx-auto max-w-7xl'>
        {
          data.map((e,i)=>{
            return(
              <ul key={i} className='pb-20 mx-auto mt-5 border-b border-[#ddd]'>
                <li className={`mb-3 text-sm font-bold md:text-2xl lg:text-3xl ${dark ? `text-white` : ``}`}>{e.title}</li>
                <li className={`text-xs mb-10 md:text-xl lg:text-[24px] ${dark ? `text-[#e6e6e6]` : ``}`}>{e.desc}</li>
                <li className='mx-auto lg:w-full'>
                  {Array(e.desc2.length).fill().map((_,index)=>{
                    return (
                      <span key={i} className={`p-1 mr-2 text-sm border ${dark ? `text-[#ddd]` : ``} border-[#5E5BE3] rounded-lg md:text-xl`}>{e.desc2[index]}</span>
                    )
                  })
                  }  
                </li>
                <li className='flex mt-2'>
                {
                  Array(e.desc3.length).fill().map((_,i)=>{
                    return(
                      <p key={i} className={`mr-10 ${dark ? `text-[#ddd]` : ``} md:mr-20 basis-[7%]`}>{e.desc3[i]}</p>
                    )
                  })
                } 
                </li>
              </ul>
            )
          })
        }
      </div>
      <div className='w-full pb-5 text-end'>
      <span onClick={() => navigate(-1)} className={`cursor-pointer p-10 text-sm md:text-2xl ${dark ? `text-white` : ``}`}>Back</span>
      </div>
      </div>
    <Footer />
    </>
  )
}

export default About