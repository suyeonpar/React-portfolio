import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import '../index.css';

function Content() {
  
  const list = [
    {
      title : "Clone-coding",
      desc : "belif x VDL",
      desc2 : "belif x VDL",
      icon : faChevronDown
    },
    {
      title : "Project-greenping",
      desc : "team project - greenping",
      desc2 : "team project - greenping",
      icon : faChevronDown
    },
    {
      title : "Quiz",
      desc : "Lorem Ipsum is simply dummy",
      desc2 : "Lorem Ipsum is simply dummy",
      icon : faChevronDown
    },
    {
      title : "Clone-coding",
      desc : "SUBWAY",
      desc2 : "SUBWAY",
      icon : faChevronDown
    },
  ]

  const [isActive, setIsActive] = useState(0);


  const Stars = 400;

  const createRandomStar = () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const size = Math.random() * 3;
  return { x, y, size,};
  };

  const stars = Array.from({ length: Stars }, createRandomStar);
  

  return (
    <>
    <div className='w-full h-auto mx-auto'>
      <p className='text-5xl text-[#474747] leading-[400px] font-bold text-center'>성장하는 개발자 <span className='font-bold text-[#5E5BE3]'>박수연</span>입니다.</p>  
      <div className='w-[1200px] mx-auto mt-[200px]'>
        <div className="flex flex-wrap justify-around w-full">
          <img src="https://via.placeholder.com/425x450" alt='프로필 사진' className='border shadow-md rounded-2xl'/>
          <ul className='p-5 text-justify border-b'>
            <h3 className='mb-3 text-5xl font-bold'>About me</h3>
            <li className='mb-3 text-3xl'>디자이너에서 <span className='font-bold text-[#5E5BE3]'>개발자</span>로의 성장</li>
            <li className='text-2xl text-[#ddd] mb-5 w-[500px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged..</li>
          </ul>
        </div>
        <div className='flex flex-wrap justify-between w-full mx-auto mt-20 bg-white'>
        {
          list.map((e,i)=>{
            return(
              <div key={i} className="box-border relative flex p-10 cursor-pointer basis-[45%]">
                <ul className='border-b basis-full'>
                  <h3 className="text-3xl font-bold">{e.title}</h3>
                  <li className="my-4 text-2xl">{e.desc}</li>
                  <li className="my-4">{e.desc}</li>  
                </ul>
              </div>
            )
          })
        }
        </div>
      </div>
      <div className='w-[50px] bg-black h-[500px]'>
      <div className='relative custom-spin-animation'> 
      {
        stars.map((star, index) => (
          <div
            key={index}
            className="top-[50%] absolute w-2 h-2 bg-white rounded-full "
            style={{
              left: `${star.x}px`,
              top: `${star.y}px`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          ></div>
        )
      )}
      </div>
      </div>
    </div>
    </>
  )
}

export default Content