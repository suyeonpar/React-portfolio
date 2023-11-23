import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <>
    <div className='w-full mx-auto h-full bg-white absolute z-[99999]'>
      <div className='absolute z-[9999999] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
        <span className='text-center font-bold text-xl md:text-3xl lg:text-4xl'><span className=' md:text-5xl lg:text-7xl text-[#5E5BE3]'>404</span> NOT FOUND</span>
        <Link to='/'><p className='text-center mt-2 md:mt-5 md:text-2xl lg:text-3xl'>메인으로 돌아가기</p></Link>
      </div>
    </div>
    </>
  )
}

export default Notfound