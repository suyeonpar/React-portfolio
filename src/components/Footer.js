import React from 'react'

function Footer({ dark, toggleDarkMode }) {
  return (
    <>
    <div className='w-full h-10 text-center bg-black border-t md:h-[50px]'>
      <div className="items-center">
        <p className='text-sm leading-9 text-gray-600 md:text-xl md:leading-[49px]'>@Copyright ©suyeon. All rights reserved.</p>
      </div>
    </div>
    </>
  )
}

export default Footer