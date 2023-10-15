import React from 'react'

function Game() {
  return (
    <>
    <div className='game-content w-[1280px] mx-auto h-[600px] text-center mt-20'>
        <h3 className='text-5xl font-bold'>Would you like to play a game?</h3>
        <ul className='flex justify-between w-[400px] mt-20 mx-auto text-3xl'>
            <li className=''>{'{Quiz}'}</li>
            <li className=''>{'{App}'}</li> 
        </ul>
    </div>
    </>
  )
}

export default Game