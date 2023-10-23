import { faBox, faChevronDown, faCopyright, faGamepad, faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import '../index.css';
import condata from '../data/ContentData'
import data from '../data/GameData'

function Content() {
  //별
  const [Stars, setStars] = useState(1000);
  const width = window.innerWidth;
  const height = window.innerHeight;

  const createRandomStar = () => {
  const x = Math.random() * width;
  const y = Math.random() * height;
  const size = Math.random() * 3;
  return {x,y,size}
  };

  const stars = Array.from({ length: Stars }, createRandomStar);

  //필터
  const [filteredData, setFilteredData] = useState([]);
  const txtList = ["Clone", "Game", "API", "CSS"];
  const [id, setId] = useState(txtList);
  const [txt, setTxt] = useState(0);
  const FilterId = [...new Set(condata.map(e => e.id))];
  
  useEffect(() => {
    setId(txtList);
  }, []);
  
  useEffect(() => {
    const filteredData = condata.filter(e => id.includes(e.id));
    console.log(filteredData);
  }, []);
  
  
  const [isActive, setIsActive] = useState(0)
  //const dataFilter = condata.filter(e => id.includes(e.id));

  return (
    <>
    <div className='w-full mt-[150px] pb-20'>
      <div className='w-full mx-[70%]'>
        <div className='w-[500px] bg-[#010b1a] h-[60px] overflow-hidden relative text-center leading-[70px]'>
          <div className='flex justify-between mx-auto w-[80%]'>
          <p className={`text-white text-2xl leading-[60px] text-on 
          ${isActive === -1 ? 'on' : ''}`}>ALL</p>
          {
            FilterId.map((e,i)=>{
              return(
                <p className=' text-white text-2xl leading-[60px]' onClick={()=>{
                  setIsActive(i);
                }}>{e}</p>
              )
            })
          }
          </div>
        <div className='relative h-full custom-spin-animation'> 
          {
            stars.map((star, i) => (
              <div
                key={i}
                className="absolute -top-[50px] bg-white rounded-full"
                style={{
                  left: `${star.x}px`,
                  top: `${star.y}px`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                }}
              ></div>
              )
            )}
          </div>
        </div>
      </div>
      <div className='w-[95%] mx-auto flex flex-wrap py-[2%] justify-between'>
        {
          
          filteredData.map((e,i)=>{
            return(
            <div className='mt-5'>
              <ul key={i} className='bg-white border-r pr-5'>
                <li className='font-bold text-3xl'>{e.title}</li>
                <img src={e.img} alt='이미지' className='rounded-lg border' />
                <li className='text-white bg-black rounded-sm w-[50px]'>USE</li>
                <li className='text-xl'>{e.desc}</li>
                <li className='text-xl'>{e.desc2}</li>
                <li className='text-xl'>{e.desc3}</li>
              </ul>
            </div>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default Content