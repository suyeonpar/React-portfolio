import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Content() {
  return (
    <>
    <div className='absolute w-full mx-auto text-center'>
      <FontAwesomeIcon icon={faArrowDown} className='text-4xl' />
      <p className='mt-10 text-2xl'>welcome my portfolio</p>  
    </div>
    <div className='w-[1280px] mx-auto mt-[120px]'>
      <div className="flex flex-wrap justify-between max-w-xs">
        <div className='flex'>
          <img src='/images/porfile.jpeg' alt='프로필사진' />
          <h3 className='text-3xl'>About ME</h3>   
        </div>
        <div className='flex'>
          <img src='https://via.placeholder.com/400x500' alt='프로필사진' />
          <h3 className='text-3xl'>lorem5</h3>   
        </div>
        <div className='flex transform'>
          <img src='https://via.placeholder.com/400x500' alt='프로필사진' />
          <h3 className='text-3xl'>lorem5</h3>   
        </div>
      </div>
    </div>
    </>
  )
}

export default Content