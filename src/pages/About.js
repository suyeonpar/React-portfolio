import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import WOW from 'wowjs';
import 'animate.css';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faChevronDown, faGift, faList, faGithub } from '@fortawesome/free-solid-svg-icons';
import './../index.css'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';



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

  const Comment = [
    {
      desc: "‘디자인뿐만이 아니라 내가 직접 페이지를 구현하여 개발한다면 어떨까?’ 저는 그림에서 현실로의 변화를 만들어냅니다.",
      desc2: "저는 프론트엔드 개발 분야에서 계속해서 성장하고 최신 웹 개발 기술과 트렌드를 습듭합니다.",
      desc3 : "개발자 커뮤니티에 기여하고 프로젝트에 참여하여 지식을 공유하고 배울준비가 되어있습니다."
    }
  ]

  const data = [
    {
      title: "WORK EXPERIENCE",
      desc: "제가 경험한 것은요",
      desc2: ["No.1 스포츠 의류 쇼핑몰", "Allendino 남성쇼핑몰", "오늘미술학원"],
      desc3 : ["2022.11 ~ 2023.04", "2021.10 ~ 2022.10", "2016.01 ~ 2019.06"],
      icon: faChevronDown
    },
    {
      title: "SKILL",
      desc: "제가 자신 있는 것은요",
      desc2: ["HTML5", "CSS3", "TailwindCSS", "SCSS", "React", "node.js", "TypeScript", "Next.js", "AdobePhotoshop CS6", "AdobeIllustrator 2020"],
      desc3 : [""],
      icon: faChevronDown
    },
    {
      title: "Collaboration & Tools ",
      desc: "제가 자신있는 협업툴은요",
      desc2: ["figma", "slack", "npm", "yarn", "Git", "Github", "Notion", "Vercel"],
      desc3 : [""],
      icon: faChevronDown
    },
    {
      title : "EDUCTION",
      desc : "제가 배운것은요",
      desc2 : ["그린 컴퓨터아트학원", "그린 온라인 캠프", "스터디 Toy project"],
      desc3 : ["2023.06.29 ~", "2023.09.06 ~ 2023.10.06", "2023.10.12 ~"],
      icon: faChevronDown
    }
  ]

  const [arrows, setArrows] = useState(false);

  const toggleArrow = () => {
    setArrows(!arrows)
  }
  
  return (
    <>
    <Header dark={dark} toggleDarkMode={toggleDarkMode} />
    <div className={`w-full mx-auto pt-[120px] md:pt-[180px] lg:pt-[200px] ${dark ? `bg-[#010b1a]` : `bg-white`}`}>
      <p className={`pb-5 md:pb-10 text-xl ${dark ? `text-white` : `text-black`} text-center md:text-4xl lg:text-5xl wow animate__fadeInUp`} data-wow-duration="1.5s">안녕하세요. 개발자 <span className='text-2xl font-bold text-[#5E5BE3] md:text-5xl lg:text-6xl'>박수연</span> 입니다.</p>
      <div className='flex mx-auto md:mb-20 max-w-7xl'>
        <div className="flex flex-wrap justify-between mx-auto text-center">
          <div className='mx-auto pb-7 text-justify border-b basis-[78%] md:pb-10 md:basis-full'>
            <p className={`mb-5 ${dark ? `text-[#bdbdbd]` : `text-black`} text-xl text-center md:text-3xl lg:text-4xl md:mb-20`}>디자이너에서 <span className={`font-bold ${dark ? `text-[#ddd]`: ``} text-[#242424]`}>개발자 </span>로의 성장</p>
            {
              Comment.map((e,i)=>{
                return(
                  <div key={i}>
                    <p className={`text-xs mb-5 md:text-xl md:w-4/5 md:mx-auto lg:w-full lg:text-2xl ${dark ? `text-[#e6e6e6]` : ``}`}>{e.desc}</p>
                    <p className={`text-xs mb-5 md:text-xl md:w-4/5 md:mx-auto lg:w-full lg:text-2xl ${dark ? `text-[#e6e6e6]` : ``}`}>{e.desc2}</p>
                    <p className={`text-xs mb-5 md:text-xl md:w-4/5 md:mx-auto lg:w-full lg:text-2xl md:mb-10 ${dark ? `text-[#e6e6e6]` : ``}`}>{e.desc3}</p>
                  </div>

                )
              })
            }
            <span className={`w-[100%] text-sm ${dark ? `text-[#b3b3b3]` : ``} cursor-pointer group relative md:text-2xl md:ml-[9.7%] lg:text-3xl lg:ml-0`}>sksrbdpdy@naver.com
            <span class={`absolute top-6 text-sm hidden truncate ${dark ? `text-[#5c5c5c]` : `text-[#ddd]`} md:top-8 lg:top-10 left-1/2 transform translate-x-[-50%] group-hover:block transition-[1s] md:text-2xl group-hover:md:top-10`}>메일은 언제나 환영입니다. :{')'}</span></span>
          </div>
        </div>
      </div>
      <div className='mx-auto md:justify-start max-w-7xl'>
        {
          data.map((e,i)=>{
            return(
              <ul key={i} className='relative pb-20 w-[75%] md:w-[80%] lg:w-full mx-auto mt-5 border-b border-[#ddd]'>
                <li className={`mb-3 text-sm font-bold md:text-2xl lg:text-3xl ${dark ? `text-white` : ``}`}>{e.title}</li>
                <li className={`text-xs mb-2 md:mb-5 lg:mb-10 md:text-xl lg:text-[24px] ${dark ? `text-[#e6e6e6]` : ``}`}>{e.desc}</li>
                <li className='flex flex-wrap mx-auto'>
                  {Array(e.desc2.length).fill().map((_,index)=>{
                    return (
                      <span key={i} className={`p-1 mr-2 mb-2 text-xs border ${dark ? `text-[#ddd]` : ``} border-[#5E5BE3] rounded-lg md:text-sm lg:text-xl`}>{e.desc2[index]}</span>
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
                <li onClick={toggleArrow} className='absolute text-xs cursor-pointer right-5 bottom-10 md:text-xl'><FontAwesomeIcon icon={e.icon} className={`fa-rotate-${setArrows ? '45' : '-45'}`} /></li>
              </ul>
            )
          })
        }
      </div>
      <div className='w-full md:pb-3 md:pt-3 text-end'>
      <span onClick={() => navigate(-1)} className={`cursor-pointer p-10 text-sm md:text-2xl ${dark ? `text-white` : ``}`}>Back</span>
      </div>
      </div>
    <Footer />
    </>
  )
}

export default About