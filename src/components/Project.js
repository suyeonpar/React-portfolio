import React, { useEffect, useState } from 'react'

function Project() {

  const list = ["Quiz","Race","Maze","Card"]
  const [isActive, setIsActive] = useState(false) 
  
  const item = [
    {
        title : "TOY",
        desc : "Toy Project.",
        img : "/images/toy-project.jpg",
        day : "2 weeks"
    },
    {
        title : "Greenping",
        desc : "Camping Website.",
        img : "/images/greenping.jpg",
        day : "1 month"
    }
  ]
  
  return (
    <>
    <div className='w-full mx-auto h-[500px] text-center mt-20 items-center mb-20'>
      <div className='pt-12'>
        <h3 className='mb-20 text-5xl font-bold'>PROJECT</h3>
        <div className='flex justify-around w-[80%] mt-20 mx-auto flex-wrap box-border'>
        {
          item.map((e, i) => (
            <ul key={i} className='bg-white border mb-4 h-[400px] w-[300px] box-border flex flex-col justify-center items-center rounded-lg basis-full sm:basis-1/4'>
              <li className='p-2 text-2xl text-white bg-black'>{e.title}</li>
              <img src={e.img} alt='ff' />
              <li>{e.desc}</li> 
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