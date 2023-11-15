import React from 'react'

function Footer({dark}) {
  return (
    <>
    <div className='w-full h-auto bg-black border-t border-gray-600'>
      <div className='flex flex-wrap items-center justify-center mx-auto text-center max-w-7xl mt-4 mb-4'>
        <h3 className='text-center text-3xl text-gray-400 md:text-6xl'>CONTACT ME</h3>
        <img src='/images/qrcode_350.png' alt='카카오톡 연결' className='w-7 md:w-16 bg-white ml-2' />
      </div>
      <p className='text-sm leading-9 text-center border-t border-gray-700 text-gray-600 md:text-xl md:leading-[49px]'>@Copyright ©suyeon. All rights reserved.</p>
    </div>
    </>
  )
}

export default Footer