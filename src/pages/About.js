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
      title: "SKILL",
      desc: "제가 자신있는것은요",
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
      desc2 : ["그린 컴퓨터아트학원", "그린 온라인 캠프", "Toy project"],
      desc3 : ["2023.06.28 ~", "2023.09.06 ~ 2023.10.06", "2023.10.12 ~"]
    }
  ]
  
  return (
    <>
    <Header dark={dark} toggleDarkMode={toggleDarkMode} />
    <div className={`w-full mx-auto pt-[200px] ${dark ? `bg-[#010b1a]` : `bg-white`}`}>
      <p className={`pb-20 text-2xl ${dark ? `text-white` : `text-black`} text-center md:text-5xl wow animate__fadeInUp`} data-wow-duration="1.5s">안녕하세요. 개발자 <span className='text-3xl font-bold text-[#5E5BE3] md:text-6xl'>박수연</span> 입니다.</p>
      <div className='flex mx-auto mb-20 max-w-7xl'>
        <div className="flex flex-wrap justify-between text-center md:basis-full">
          <ul className='pb-5 mx-auto text-center text-justify border-b basis-4/5 md:pb-9 basis-1/2'>
            <li className={`mb-10 ${dark ? `text-[#bdbdbd]` : `text-black`} text-2xl text-center md:text-4xl`}>디자이너에서 <span className={`font-bold ${dark ? `text-[#ddd]`: ``} text-[#242424]`}>개발자</span> 로의 성장</li>
            <li className='text-xl text-[#474747] mb-5 md:text-[22px]'>‘디자인뿐만이 아니라 내가 직접 페이지를 구현하여 개발한다면 어떨까?’라는 생각과 욕심이 생겼고 프론트엔드 개발자라는 직업에 관심이 생겼습니다.</li>
            <li className='text-xl text-[#474747] mb-5 md:text-[22px]'>저는 프론트엔드 개발 분야에서 계속해서 성장하고, 최신 웹 개발 기술과 트렌드를 습득하고, 개발자 커뮤니티에 기여하고 프로젝트에 참여하여 지식을 공유하고 배울준비가 되어있습니다.</li>
            <span className={`w-[100%] text-xl ${dark ? `text-[#b3b3b3]` : ``} cursor-pointer group relative md:text-3xl`}>sksrbdpdy@naver.com
            <span class="absolute text-sm hidden truncate text-[#ddd] top-6 left-1/2 transform translate-x-[-50%] group-hover:block transition-[1s] md:text-2xl top-10">메일은 언제나 환영입니다. :{')'}</span></span>
          </ul>
        </div>
      </div>
      <div className='flex flex-wrap justify-between mx-auto max-w-7xl'>
        {
          data.map((e,i)=>{
            return(
              <ul key={i} className='pb-20 mb-5 border-b basis-1/3 border-[#ddd] md:basis-full'>
                <li className='mb-3 text-xl font-bold md:text-3xl'>{e.title}</li>
                <li className='text-xl mb-10 md:text-[24px]'>{e.desc}</li>
                <div className='w-[40%] mx-auto md:w-full'>
                  {Array(e.desc2.length).fill().map((_,index)=>{
                    return (
                      <span key={i} className={`p-1 mr-2 text-sm border ${dark ? `text-[#ddd]` : ``} border-[#5E5BE3] rounded-lg md:text-xl basis-full`}>{e.desc2[index]}</span>
                    )
                  })
                  }  
                </div>
                <div className='flex mt-2'>
                {
                  Array(e.desc3.length).fill().map((_,i)=>{
                    return(
                      <p key={i} className={`mr-10 ${dark ? `text-[#ddd]` : ``} md:mr-20 basis-[7%]`}>{e.desc3[i]}</p>
                    )
                  })
                } 
                </div>
              </ul>
            )
          })
        }
      </div>
      <div className='w-full pb-5 text-end'>
      <span onClick={() => navigate(-1)} className={`p-10 text-sm md:text-2xl ${dark ? `text-white` : ``}`}>Back</span>
      </div>
      </div>
    <Footer />
    </> 
  )
}

export default About