import React, { useEffect, useState } from 'react'

function Project() {

  const list = ["Quiz","Race","Maze","Card"]
  const [isActive, setIsActive] = useState(false) 
  
  const content = [
    {
        title : "TOY",
        desc : "Lorem, ipsum.",
        img : "https://via.placeholder.com/200x200",
        day : "2weeks"
    },
    {
        title : "Greenping",
        desc : "Lorem, ipsum.",
        img : "https://via.placeholder.com/200x200",
        day : "2weeks"
    },
    {
        title : "Greenping",
        desc : "Lorem, ipsum.",
        img : "https://via.placeholder.com/200x200",
        day : "2weeks"
    },
    {
        title : "Greenping",
        desc : "Lorem, ipsum.",
        img : "https://via.placeholder.com/200x200",
        day : "2weeks"
    }
  ]
  
  return (
    <>
    <div className='game-content w-full mx-auto h-[500px] text-center mt-20 items-center mb-20'>
      <div className='pt-12 '>
        <h3 className='mb-20 text-5xl font-bold'>PROJECT</h3>
        <div className='flex justify-between w-[80%] mt-20 mx-auto flex-wrap box-border'>
        {
            content.map((e, i) => (
                <ul key={i} className='bg-white border h-[400px] w-[300px] box-border flex flex-col justify-center items-center rounded-lg'>
                    <li className='text-2xl bg-black text-white p-2'>{e.title}</li>
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