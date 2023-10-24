import React, { useEffect, useState } from 'react'

function Project({ dark, toggleDarkMode }) {

  const list = ["Quiz","Race","Maze","Card"]
  const [isActive, setIsActive] = useState(false) 
  
  const item = [
    {
        title : "TOY",
        desc : "Toy Project.",
        desc2 : "기여도 100%",
        img : "/images/toy-project.jpg",
        day : "2 weeks",
        "URL" : "https://suyeonpar.github.io/clone-belif/"
    },
    {
        title : "Project Greenping",
        desc : "Camping Website.",
        desc2 : "기여도 20%",
        img : "/images/greenping.jpg",
        day : "1 month",
        "URL" : "https://suyeonpar.github.io/clone-belif/"
    }
  ]
  
  return (
    <>
    <div className='items-center w-full mx-auto mt-20 mb-20 text-center'>
      <div className='pt-12'>
        <h3 className='mb-10 text-5xl font-bold'>PROJECT</h3>
        <p className='text-xl'>혼자만이 아닌, 함께하는 프로젝트</p>
        <div className='flex justify-center w-[80%] mt-20 mx-auto flex-wrap box-border'>
        {
          item.map((e, i) => (
            <ul key={i} className={`border mb-4 h-[450px] w-[300px] box-border flex flex-col justify-center items-center basis-full sm:basis-full ${i === 0 ? 'text-3xl' : 'bg-white'}`}
            // onMouseEnter={() => { e.target.style.mixBlendMode = 'color-burn'; }}
            // onMouseLeave={() => { e.target.style.mixBlendMode = 'normal'; }}
            >
              <img src={e.img} alt={e.title} className='mb-10' />
              <li className=''>{e.desc}</li> 
              <li>{e.day}</li>
            </ul>
          ))
        }
        </div>
      </div>
    </div>
    </>
  )
}

export default Project