import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Content() {
  
//   const $sky = document.querySelector(".sky");

// // 브라우저 창 크기에 따른 별 생성
// window.onresize = () => {
//   makeStars();
// }

// const makeStars = () => {
//   // 브라우저 가장 큰 크기
//   const maxSize = Math.max(window.innerWidth, window.innerHeight)

//   // 랜덤한 X 위치 값
//   const getRandomX = () => Math.random() * maxSize;

//   // 랜덤한 Y 위치 값
//   const getRandomY = () => Math.random() * maxSize;

//   // 랜덤한 크기 (circle는 반지름이 크기)
//   const randomRadius = () =>  Math.random() * 0.7 + 0.6;
  
//   // 임의의 값
//   const _size = Math.floor(maxSize / 2);
  
//   const htmlDummy = new Array(_size).fill().map((_, i) => {
//     return  `<circle class='star'
//         cx=${getRandomX()}
//         cy=${getRandomY()}
//         r=${randomRadius()}
//         className="star" />`
//   }).join('');
  
//   $sky.innerHTML = htmlDummy;
// }

// window.onload = () => {
//   makeStars();
// }

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
    <div className='w-full mx-auto text-center'>
      <p className='text-5xl text-[#474747]'>성장하는 개발자 박수연입니다.</p>  
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
    </>
  )
}

export default Content