import React, { useEffect, useState } from 'react'

function Game() {

  const list = ["Quiz","Race","Maze","Card"]
  const [isActive, setIsActive] = useState(false)  

  return (
    <>
    <div className='game-content w-full mx-auto h-[500px] text-center mt-20 items-center mb-20'>
      <div className='pt-12 '>
        <h3 className='mb-20 text-5xl font-bold'>Would you like to play a game?</h3>
        <p className='text-7xl text-[#5E5BE3]'>TOY PROJECT</p>
        <ul className='flex justify-between w-[80%] mt-20 mx-auto flex-wrap'>
        {/* {
          list.map((e,i)=>{
            return(
            <li key={i} className='text-4xl hover:text-[#5E5BE3]'>{e}</li>
            )
          })
        } */}
        </ul>
      </div>
    </div>
    </>
  )
}

export default Game