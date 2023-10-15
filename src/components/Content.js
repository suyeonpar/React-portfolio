import { faArrowDown, faChevronDown } from '@fortawesome/free-solid-svg-icons'
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
      desc : "Lorem Ipsum is simply dummy",
      icon : faChevronDown
    },
    {
      title : "project",
      img : "https://via.placeholder.com/300x300",
      desc : "Lorem Ipsum is simply dummy",
      icon : faChevronDown
    },
    {
      title : "clone-cording",
      img : "https://via.placeholder.com/300x300",
      desc : "Lorem Ipsum is simply dummy",
      icon : faChevronDown
    },
  ]

  return (
    <>
    {/* <div className="w-screen h-screen overflow-hidden bacrelative bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="absolute w-screen h-screen transform -translate-x-1/2 -translate-y-1/2 sky top-1/2 left-1/2 animate-moveStar">
        <div className='text-white fill-current stroke-0 stroke-none'></div>
      </div>
    </div> */}
    <div className='absolute w-full mx-auto text-center'>
      <FontAwesomeIcon icon={faArrowDown} className='text-4xl text-[#474747]' />
      <p className='mt-10 text-2xl'>성장하는 개발자 박수연입니다.</p>  
    </div>
    <div className='w-[1200px] mx-auto mt-[200px]'>
      <div className="flex flex-wrap justify-between max-w-xs">
        <ul className='flex flex-wrap '>
        {
          content.map((e,i)=>{
            return(
              <div className=''>
                <img src={e.img} alt='이미지' />
                <li key={i}>{e.title}</li>
                <li>{e.desc}</li>
                <FontAwesomeIcon icon={e.icon} />
              </div>
            )
          })
        }
        </ul>
      </div>
    </div>
    </>
  )
}

export default Content