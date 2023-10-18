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


  const Stars = 1000;
  const width = 400;
  const height = 600;

  const createRandomStar = () => {
  const x = Math.random() * width;
  const y = Math.random() * height;
  const size = Math.random() * 3;
  return { x, y, size,};
  };

  const stars = Array.from({ length: Stars }, createRandomStar);
  
  return (
    <>
    <div className='w-full mt-20'>
      <div className='w-[1280px] mx-auto flex flex-wrap py-[2%]'>
        {
          list.map((e,i)=>{
            return(
              <div key={i} className="box-border flex-1 p-12">
                <ul className='border-b basis-full'>
                  <h3 className="text-4xl font-bold">{e.title}</h3>
                  <li className="my-4 text-2xl">{e.desc}</li>
                  <li className="my-4">{e.desc}</li>  
                </ul>
              </div>
            )
          })
        }
        <div className='w-[50px] bg-black h-[500px]'>
          <div className='relative custom-spin-animation'> 
            {
              stars.map((star, i) => (
                <div
                  key={i}
                  className="top-[50%] absolute w-2 h-2 bg-white rounded-full overflow-hidden"
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
    </div>
    </>
  )
}

export default Content