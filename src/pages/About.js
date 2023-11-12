import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import WOW from 'wowjs';
import 'animate.css';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './../index.css'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';

function About({ dark, toggleDarkMode }) {

  const navigate = useNavigate();

  const gitClick = () => {
    window.open('https://github.com/suyeonpar', '_blank');
  };

  const notionClick = () => {
    window.open('https://www.notion.so/SUYEON-HOME-9923404870d24fffb5f06fe933f9956e', '_blank');
  }
  
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
      desc3 : "개발자 커뮤니티에 기여하고 프로젝트에 참여하여 지식을 공유하고 배울준비가 되어있습니다.",
      icon : faGithub,
      img: "../images/notion.png"
    }
  ]

  const data = [
    {
      title: "SKILL",
      desc: "제가 자신 있는 것은요",
      desc2: ["React", "Next.js","HTML5", "CSS3","JavaScript","TypeScript", "TailwindCSS", "SCSS","stylecomponents", "node.js","firebase","mysql", "AdobePhotoshop CS6", "AdobeIllustrator 2020"],
      desc3: ["React: 저는 동적 및 대화형 사용자 인터페이스를 구축하기 위한 강력한 JavaScript 라이브러리인 React에 능숙합니다. React를 사용하여 해당 구성 요소를 활용하여 반응형 웹 애플리케이션을 만든 경험이 있습니다.", "Next.js: Next.js를 통해 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 구현하여 사용자 경험과 성능을 최적화했습니다. Next.js의 간편한 라우팅 시스템을 활용하여 사용자가 원하는 정보에 빠르게 접근할 수 있도록 페이지를 최적화했습니다.", "HTML: 사용자 친화적이고 접근성을 고려한 웹 페이지를 디자인하고 개발하는 프론트엔드 엔지니어입니다. HTML은 웹 개발의 기초이자 핵심인 만큼, 나만의 효율적이고 의미 있는 마크업을 만들어내기에 주력하고 있습니다.","CSS: CSS3 변수를 활용하여 코드를 모듈화하고 유지보수를 간편하게 하였으며, 아이콘과 다양한 글꼴을 적용하여 시각적 다양성을 높였습니다.","JavaScript: JavaScript를 활용하여 사용자의 입력에 실시간으로 반응하고, 동적인 콘텐츠를 제공하는데 중점을 두어, 인터랙티브한 웹 페이지를 개발할 수 있습니다. 또한, 클라이언트 측에서 동적으로 DOM을 조작하여 사용자 인터페이스를 업데이트하고, 모던 JavaScript 프레임워크를 적용하여 코드의 가독성과 유지보수성을 높였습니다.","TypeScript: TypeScript를 도입하여 코드의 안정성을 향상시키고, 명시적인 타입 정의를 통해 개발 생산성을 높였습니다.", "TailwindCSS: Tailwind CSS를 도입하여 직관적이고 유연한 클래스 기반 스타일링을 구현하였으며, 커스터마이징 가능한 디자인 시스템을 활용하여 웹 페이지의 스타일을 빠르게 구축하고 관리했습니다.", "SCSS: SCSS를 도입하여 변수, 중첩 규칙, 및 모듈화된 스타일링을 활용하여 유지보수성이 뛰어나고 가독성이 좋은 스타일 시트를 작성할 수 있습니다."]
    },
    {
      title: "WORK EXPERIENCE",
      desc: "제가 경험한 것은요",
      desc2: ["No.1 스포츠 의류 쇼핑몰", "Allendino 남성쇼핑몰", "오늘미술학원"],
      desc3: ["2022.11 ~ 2023.04", "2021.10 ~ 2022.10", "2016.01 ~ 2019.06"]
    },
    {
      title: "Collaboration & Tools ",
      desc: "제가 자신있는 협업툴은요",
      desc2: ["figma", "slack", "npm", "yarn", "Git", "Github", "Notion", "Vercel"],
      desc3: ["2022.11 ~ 2023.04", "2021.10 ~ 2022.10", "2016.01 ~ 2019.06"]
    },
    {
      title : "EDUCTION",
      desc : "제가 배운것은요",
      desc2 : ["그린 컴퓨터아트학원", "그린 온라인 캠프", "Deep Dive"],
      desc3: ["2022.11 ~ 2023.04", "2021.10 ~ 2022.10", "2016.01 ~ 2019.06"]
    }
  ]

  // 더보기 화살표
  const [isArrows, setIsArrows] = useState([false, false,false, false]);

  const toggleArrows = (i) => {
    setIsArrows(prevArrows => {
      const newArrows = [...prevArrows];
      newArrows[i] = !newArrows[i];
      return newArrows;
    });
  };
  
  return (
    <>
    <Header dark={dark} toggleDarkMode={toggleDarkMode} />
    <div className={`w-full mx-auto pt-[120px] md:pt-[180px] lg:pt-[200px] ${dark ? `bg-[#010b1a]` : `bg-white`}`}>
      <p className={`pb-5 md:pb-10 text-xl ${dark ? `text-white` : `text-black`} text-center md:text-4xl lg:text-5xl wow animate__fadeInUp`} data-wow-duration="1.5s">안녕하세요. 개발자 <span className='text-2xl font-bold text-[#5E5BE3] md:text-5xl lg:text-6xl'>박수연</span> 입니다.</p>
      <div className='flex mx-auto md:mb-20 max-w-7xl'>
        <div className="flex flex-wrap justify-between mx-auto text-center">
          <div className='mx-auto pb-5 mb-10 text-justify border-b basis-[78%] md:pb-10 md:basis-full'>
            <p className={`mb-5 ${dark ? `text-[#bdbdbd]` : `text-black`} text-xl text-center md:text-3xl lg:text-4xl md:mb-20`}>디자이너에서 <span className={`font-bold ${dark ? `text-[#ddd]`: ``} text-[#242424]`}>개발자 </span>로의 성장</p>
            {
              Comment.map((e,i)=>{
                return(
                  <div key={i}>
                    <p className={`text-xs mb-5 md:text-xl md:w-4/5 md:mx-auto lg:w-full lg:text-2xl ${dark ? `text-[#e6e6e6]` : ``}`}>{e.desc}</p>
                    <p className={`text-xs mb-5 md:text-xl md:w-4/5 md:mx-auto lg:w-full lg:text-2xl ${dark ? `text-[#e6e6e6]` : ``}`}>{e.desc2}</p>
                  </div>
                )
              })
            }
            <div className='flex'>
              <span className={`w-[100%] text-sm ${dark ? `text-[#b3b3b3]` : ``} cursor-pointer group relative md:text-2xl md:ml-[9.7%] lg:text-3xl lg:ml-0`}>sksrbdpdy@naver.com
              <span class={`absolute top-6 text-sm hidden truncate ${dark ? `text-[#5c5c5c]` : `text-[#ddd]`} md:top-8 lg:top-10 left-0 transform group-hover:block transition-[1s] md:text-2xl group-hover:md:top-10`}>메일은 언제나 환영입니다. :{')'}</span></span>
              <div className='flex mt-0 md:mt-2'> 
                <FontAwesomeIcon icon={faGithub} onClick={gitClick} className={`text-2xl md:text-[40px] p-1 cursor-pointer ${dark ? `bg-white rounded-lg` : ``}`} />
                <img src="../images/notion.png" alt='{e.img}' title='{e.img}' className='w-[32px] md:w-[45px] cursor-pointer ml-3 mr-5 md:ml-7 md:mr-8' onClick={notionClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto md:justify-start max-w-7xl'>
        {
          data.map((e,i)=>{
            return(
              <>
              <ul key={i} className='relative pb-10 md:pb-16 w-[75%] md:w-[80%] lg:w-full mx-auto mt-5 border-b border-[#ddd]'>
                <li className={`mb-3 text-sm font-bold md:text-2xl lg:text-3xl ${dark ? `text-white` : ``}`}>{e.title}</li>
                <li className={`text-xs mb-2 md:mb-5 lg:mb-10 md:text-xl lg:text-[24px] ${dark ? `text-[#e6e6e6]` : ``}`}>{e.desc}</li>
                <li className='flex flex-wrap mx-auto'>
                  {Array(e.desc2.length).fill().map((_,index)=>{
                    return (
                      <span key={index} className={`p-1 mr-2 mb-2 text-xs border ${dark ? `text-[#ddd]` : ``} border-[#5E5BE3] rounded-lg md:text-sm lg:text-xl`}>{e.desc2[index]}</span>
                    )
                  })
                }  
                </li>
                <li className="absolute text-xs cursor-pointer right-5 bottom-5 md:text-xl">
                  <FontAwesomeIcon icon={faChevronDown} onClick={()=>{toggleArrows(i)}} className={`${isArrows[i] ? `rotate-180` : `rotate-0`}`}/>
                </li>
              </ul>
              {
                isArrows[i] &&
                Array(e.desc3.length).fill().map((_,index)=>{
                  return(
                    <ul key={index}>
                      <li>{data[i].desc3[index]}</li>
                    </ul>
                  )
                })
              }
              </>
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