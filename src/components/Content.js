import { faBox, faChevronDown, faCopyright, faGamepad, faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import '../index.css';

function Content() {

  const icon = [faCopyright, faPencil, faBox]
  
  
  const list = [
    {
      title : "Clone-coding",
      desc : "My clone coding",
      desc2 : "belif x VDL",
      desc3 : "SUBWAY",
      icon : faChevronDown
    },
    {
      title : "Project-greenping",
      desc : "greenping",
      desc2 : "Camping reservation",
      icon : faChevronDown
    },
    {
      title : "Quiz",
      desc : "LET'S PLAY QUIZ!",
      desc2 : "Lorem Ipsum is simply dummy",
      icon : faChevronDown
    }
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
        <div className='w-[150px] bg-black h-[500px] overflow-hidden relative'>
        {
          icon.map((e,i)=>{
            return(
              <div className='' key={i}>
                <ul className='pt-20 ml-10 text-3xl'>
                  <li className=''><FontAwesomeIcon icon={e} className='text-white' /></li>
                </ul>
              </div>
            )
          })
        }
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
        {
          list.map((e,i)=>{
            return(
              <div className="box-border flex-1 p-12 border-r" key={i}>
                <ul className='basis-[50%]'>
                  <h3 className="text-4xl font-bold">{e.title}</h3>
                  <li className="my-4 text-2xl">{e.desc}</li>
                  <li className="my-4 text-2xl text-[#ddd]">{e.desc2}</li> 
                  <li className="my-4 text-2xl text-[#ddd]">{e.desc3}</li> 
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