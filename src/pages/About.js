import React, { useEffect } from 'react'
import Header from '../components/Header'
import WOW from 'wowjs';
import 'animate.css';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

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
      title : "SKILL",
      desc : "제가 자신있는것은요",
      desc2 : "HTML5, CSS3, Tailwind CSS, SCSS, React, node.js "
    },
    {
      title : "EDUCTION",
      desc : "제가 배운것은요"
    }
  ]
  
  const Desc = ["HTML5", "CSS3", "Tailwind CSS", "SCSS", "React", "node.js"]

  const iconArray = [{faList},{faList},{faList}];
  console.log(iconArray)
  
  return (
    <>
    <Header />
    <div className='w-full h-auto mx-auto mt-[200px]'>
      <p className='pb-20 text-5xl text-center wow animate__fadeInUp' data-wow-duration="1.5s">안녕하세요. 개발자 <span className='font-bold text-[#5E5BE3]'>박수연</span>입니다.</p>
      <div className='w-[1200px] mx-auto pb-20'>
        <div className="flex flex-wrap justify-around">
          <img src="/images/profile2.jpeg" alt='프로필 사진' className='border shadow-lg rounded-2xl w-[425px] h-[450px]'/>
          <ul className='text-justify border-b'>
          <li className='mb-10 text-3xl'>디자이너에서 <span className='font-bold text-[#242424]'>개발자</span>로의 성장</li>
            <li className='text-[22px] text-[#474747] mb-5 w-[500px]'>‘디자인뿐만이 아니라 내가 직접 페이지를 구현하여 개발한다면 어떨까?’라는 생각과 욕심이 생겼고 프론트엔드 개발자라는 직업에 관심이 생겼습니다.</li>
            <li className='text-[22px] text-[#474747] mb-5 w-[500px]'>저는 프론트엔드 개발 분야에서 계속해서 성장하고, 최신 웹 개발 기술과 트렌드를 습득하고, 개발자 커뮤니티에 기여하고 프로젝트에 참여하여 지식을 공유하고 배울준비가 되어있습니다.</li>
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
              <ul key={i} className='pb-20 mb-3 border-b basis-full'>
                <li className='mb-3 text-3xl font-bold'>{e.title}</li>
                <li className='text-[18px]'>{e.desc}</li>
                {
                  Desc.map((e,i)=>{
                    return(
                      <ul className='flex' key={i}>
                        <li className='p-1 border rounded border-[#ddd]'>{e}</li>
                      </ul>
                    )
                  })
                }
              </ul>
            )
          })
        }
      </div>
    </div>
    <Footer />
    </>
  )
}

export default About