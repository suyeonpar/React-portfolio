import React from 'react'

function Game() {
  return (
    <>
    <div className='game-content w-full mx-auto h-[300px] text-center mt-20 items-center mb-20' style={{backgroundImage: 'url("/images/bgimg2.jpg")'}}>
        <div className='pt-12'>
          <h3 className='text-5xl font-bold'>Would you like to play a game?</h3>
          <ul className='flex justify-between w-[400px] mt-20 mx-auto'>
              <li className='text-4xl'>{'{Quiz}'}</li>
              <li className='text-4xl'>{'{App}'}</li> 
          </ul>
        </div>
    </div>
    </>
  )
}

export default Game