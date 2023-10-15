import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Board() {

  const data = [
    {
      title : "clone cording",
      img : "https://via.placeholder.com/300x200",
      svg : faHandHoldingHeart
    },
    {
      title : "game",
      img : "https://via.placeholder.com/300x200",
      svg : faHandHoldingHeart
    },
    {
      title : "git",
      img : "https://via.placeholder.com/300x200",
      svg : faHandHoldingHeart
    },
    {
      title : "notion",
      img : "https://via.placeholder.com/300x200",
      svg : faHandHoldingHeart
    }  
  ]
  
  return (
    <>
    <div className='w-[1280px] mx-auto text-center'>
      <div className='mb-[60px]'>
        <span className='text-3xl'>무엇이 가장 인상적이었나요?</span>
        <p>의견을 남겨주세요 :{")"}</p>
      </div>
      <ul className='flex justify-between w-[1280px] mx-auto'>
      {
        data.map((e,i)=>{
          return(
            <div key={i}>
              <img src={e.img} alt='이미지' />
              <li>{e.title}</li>
              <FontAwesomeIcon icon={e.svg} className='' />
            </div>
              )
            })
          }
        </ul> 
    </div>

    </>
  )
}

export default Board