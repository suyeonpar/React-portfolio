import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Content() {

  const content = [
    {
      title : "About ME",
      img : "https://via.placeholder.com/425x450",
      desc : "디자이너에서 개발자로의 성장",
      desc2 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, porro.",
      icon : faChevronDown
    },
    {
      title : "Project",
      img : "/images/greenping-logo.jpg",
      desc : "Lorem Ipsum is simply dummy",
      icon : faChevronDown
    },
    {
      title : "Clone-coding",
      img : "/images/clone.jpg",
      desc : "Lorem Ipsum is simply dummy",
      icon : faChevronDown
    },
  ]

  return (
    <>
    <div className='w-full h-auto mx-auto'>
    <div className='text-center h-[400px]'>
      <p className='text-5xl text-[#474747] leading-[400px] font-bold'>성장하는 개발자 <span className='font-bold text-[#5E5BE3]'>박수연</span>입니다.</p>  
    </div>
    <div className='w-[1200px] mx-auto mt-[200px]'>
      <div className="">
        {
          content.map((e,i)=>{
            return(
              <ul className='flex justify-between p-5 border-b ' key={i}>
                <img src={e.img} alt={e.title} className='shadow-md rounded-2xl' />
                <div className='basis-[32%]'>
                  <li className='mb-3 text-5xl font-bold'>{e.title}</li>
                  <li className='mb-3 text-2xl'>{e.desc}</li>
                  <li className='text-2xl text-[#595959] mb-5'>{e.desc2}</li>
                  <FontAwesomeIcon icon={e.icon} className='text-2xl' />
                </div>
              </ul>
            )
          })
        }
      </div>
    </div>
    </div>
    </>
  )
}

export default Content