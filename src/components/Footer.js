import React from 'react'

function Footer() {
  return (
    <>
    <div className='w-full h-auto bg-black border-t border-gray-600'>
      <div className='flex flex-wrap items-center justify-center mx-auto text-center max-w-7xl'>
        <h3 className='p-1 text-2xl text-center text-gray-400 lg:p-4 md:p-2 md:text-4xl lg:text-6xl'>CONTACT ME</h3>
        <img src='/images/qrcode_350.png' alt='카카오톡 연결' className='w-5 ml-2 bg-white border border-white md:w-9 lg:w-12 lg:ml-4' />
      </div>
      <p className='text-sm text-center text-gray-600 border-t border-gray-700 md:text-xl md:p-1 lg:p-2'>@Copyright ©suyeon. All rights reserved.</p>
    </div>
    </>
  )
}

export default Footer