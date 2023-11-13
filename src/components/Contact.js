import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Contact({ dark }) {

  return (
    <>
    <div className='w-full mx-auto mb-5 md:mb-7'>
      <div className='max-w-7xl mx-auto text-center flex items-center justify-center'>
        <h3 className={`text-center text-3xl font-bold md:text-6xl ${dark ? 'text-white' : ''}`}>CONTACT ME</h3>
        <div>
          <img src='/images/qrcode_50.png' alt='카카오톡 연결' className='w-12 md:w-20' />
        </div>
      </div>
      <div className='text-center text-sm md:text-4xl'>
        <p className='mb-2 md:mt-5'>or</p>
        <p className='mb-5'>sksrbdpdy@naver.com</p>
      </div>
    </div>
    </>
  );
}

export default Contact;