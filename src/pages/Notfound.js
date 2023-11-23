import React from 'react'

function Notfound() {
  return (
    <>
    <div className='w-full mx-auto relative h-full  '>
      <div className='h-full absolute top-1/2 left-1/2 -translate-x-[50%] translate-y-[50%]'>
        <span className='text-center font-bold text-xl sm:text-2xl '><span className='text-[45px] text-[#5E5BE3]'>404</span>NOT FOUND</span>
      </div>
    </div>
    </>
  )
}

export default Notfound