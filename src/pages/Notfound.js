import React from 'react'
import { NavLink } from 'react-router-dom'

function Notfound() {
  return (
    <>
    <div className='max-w-7xl mx-auto'>
      <span className='font-bold text-xl sm:text-2xl'><span className='text-[45px] text-[#5E5BE3]'>404</span>NOT FOUND</span>
      <NavLink to='/'>메인으로 돌아가기</NavLink>
    </div>
    </>
  )
}

export default Notfound