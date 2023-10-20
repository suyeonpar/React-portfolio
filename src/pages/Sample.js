import { faBox, faChevronDown, faCopyright, faGamepad, faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import '../index.css';
import content from '../data/GameData'

function Sample() {

  const FilterList = ["ALL", "Clone", "Api", "Quiz", "CSS"]

  
  
  const [isActive, setIsActive] = useState(0);
  
  // const list = [
  //   { 
      
  //     title : "Project",
  //     desc : "greenping",
  //     desc2 : "Camping reservation",
  //     icon : faChevronDown
  //   },
  //   {
  //     title : "Quiz",
  //     desc : "LET'S PLAY QUIZ!",
  //     desc2 : "Lorem Ipsum is simply dummy",
  //     icon : faChevronDown
  //   },
  //   {
  //     title : "Clone-coding",
  //     desc : "My clone coding",
  //     desc2 : "belif x VDL",
  //     desc3 : "SUBWAY",
  //     icon : faChevronDown
  //   }
  // ]



  const [Stars, setStars] = useState(1000);
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
    <div className='w-full mt-[150px]'>
      <div className='w-full mx-[70%]'>
        <div className='w-[500px] bg-[#010b1a] h-[60px] overflow-hidden relative text-center leading-[70px]'>
          <div className='flex justify-between mx-auto w-[80%]'>
          {
            FilterList.map((e,i)=>{
              return(
                <p className='text-white text-2xl leading-[60px]'>{e}</p>
              )
            })
          }
          </div>
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
      </div>
      <div className='w-[95%] mx-auto flex flex-wrap py-[2%] justify-between'>
        {
          
          content.map((e,i)=>{
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

export default Sample