import React, { useEffect } from 'react';

function Contact({ dark }) {

  return (
    <>
    <div className='w-full mx-auto mb-5 md:mb-7'>
      <div className='flex items-center justify-center mx-auto text-center max-w-7xl'>
        <h3 className={`text-center text-3xl font-bold md:text-6xl ${dark ? 'text-white' : ''}`}>CONTACT ME</h3>
        <div>
          <img src='/images/qrcode_50.png' alt='카카오톡 연결' className={`w-10 md:w-20 ${dark ? `bg-white rounded-sm` : ``}`} />
        </div>
      </div>
      <div className={`text-sm text-center md:text-4xl ${dark ? `text-white` : ``}`}>
        <p className='mb-2 md:mb-5'>or</p>
        <p className='mb-5'>sksrbdpdy@naver.com</p>
      </div>
    </div>
    </>
  );
}

export default Contact;