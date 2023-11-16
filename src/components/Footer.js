import React from 'react'

function Footer({dark}) {
  return (
    <>
    <div className='w-full h-auto bg-black border-t border-gray-600'>
      <div className='flex flex-wrap items-center justify-center mx-auto text-center max-w-7xl'>
        <h3 className='text-center text-2xl lg:p-4 md:p-2 p-1 text-gray-400 md:text-4xl lg:text-6xl'>CONTACT ME</h3>
        <img src='/images/qrcode_350.png' alt='카카오톡 연결' className='w-5 md:w-9 lg:w-12 bg-white ml-2 lg:ml-4' />
      </div>
      <p className='text-sm text-center border-t border-gray-700 text-gray-600 md:text-xl md:p-1 lg:p-2'>@Copyright ©suyeon. All rights reserved.</p>
    </div>
    </>
  )
}

export default Footer