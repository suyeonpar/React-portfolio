import React from 'react'

function Footer({ dark, toggleDarkMode }) {
  return (
    <>
    <div className='w-full h-10 text-center bg-black border-t md:h-[50px]'>
      <div className="items-center h-full">
        <p className='text-sm leading-10 text-white md:text-2xl'>@Copyright ©suyeon. All rights reserved.</p>
      </div>
    </div>
    </>
  )
}

export default Footer