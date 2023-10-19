import { faBox, faChevronDown, faCopyright, faGamepad } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import '../index.css';

function Content() {

  const icon = [faCopyright, faCopyright, faGamepad, faBox]
  //console.log(icon)
  
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

  const [isActive, setIsActive] = useState();


  const Stars = 1000;
  const width = window.innerWidth;
  const height = window.innerHeight;

  const createRandomStar = () => {
  const x = Math.random() * width;
  const y = Math.random() * height;
  const size = Math.random() * 3;
  return {x,y,size}
  };

  const stars = Array.from({ length: Stars }, createRandomStar);
  
  return (
    <>
    <div className='w-full mt-20'>
      <div className='w-[95%] mx-auto flex flex-wrap py-[2%] justify-between'>
        <div className='w-[150px] bg-black h-[500px] overflow-hidden'>
          <div className='relative h-full custom-spin-animation'> 
            {
              stars.map((star, i) => (
                <div
                  key={i}
                  className="absolute -top-[50px] bg-white rounded-full"
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
          <div className='w-[150px] h-[400px] relative'>
          {
            icon.map((e,i)=>{
              return(
                <div className='text-2xl' key={i}>
                  <ul>
                    <li className='bg-white'><FontAwesomeIcon icon={e} /></li>
                  </ul>
                </div>
              )
            })
          }
          </div>
          {
          list.map((e,i)=>{
            return(
              <div key={i} className="box-border flex-1 p-12 border-r">
                <ul className='basis-[50%]'>
                  <h3 className="text-4xl font-bold">{e.title}</h3>
                  <li className="my-4 text-2xl">{e.desc}</li>
                  <li className="my-4">{e.desc}</li>  
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default Content