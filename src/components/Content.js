import { faBox, faChevronDown, faCopyright, faGamepad, faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import '../index.css';
import contentdata from '../data/ContentData'
import { Link } from 'react-router-dom';

function Content(props) {
  //별
  const { Stars, stars } = props;

  //필터
  const txtList = ["Clone", "API", "Game"];
  const [txt, setTxt] = useState(-1);
  const FilterId = [...new Set(contentdata.map(e => e.id))];
  const [DataFilter, setDataFilter] = useState([]);
  
  useEffect(() => {
    if (txt === -1) {
      setDataFilter(contentdata);
    } else {
      const filteredData = contentdata.filter(e => e.id === txtList[txt]);
      setDataFilter(filteredData);
    }
  }, [txt]);

  return (
    <>
    <div className='w-full mt-[150px] pb-20 mx-auto'>
      <p className='mb-20 text-5xl font-bold text-center'>WORK</p>
      <div className='w-[500px] bg-[#010b1a] h-[60px] overflow-hidden relative text-center leading-[70px] mx-auto'>
        <div className='flex justify-between mx-auto w-[80%]'>
        <p className={`text-white text-2xl leading-[60px] cursor-pointer
        ${txt === -1 ? 'text-4xl on' : ''}`} onClick={() => {
          setTxt(-1);
        }
        }>ALL</p>
        {
          FilterId.map((e,i)=>{
            return(
              <p className={`text-white text-2xl leading-[60px] text-on cursor-pointer
              ${txt === i ? 'text-3xl on' : ''}`}
               onClick={()=>{
               setTxt(i)
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
      <div className='w-[85%] mx-auto flex flex-wrap py-[2%] justify-around'>
        {
          DataFilter.map((e,i)=>{
            return(
            <div className='mt-10'>
              <Link to={e.URL}>
              <ul key={i} className='pr-3 bg-white cursor-pointer'>
                <li className='text-3xl font-bold'>{e.title}</li>
                <div className='flex justify-between'>
                  <li className='mr-2'>{e.id}</li>
                  <li>{e.day}</li>   
                </div>
                <img src={e.img} alt='이미지' className='mb-5 border rounded-lg' />
                <li className='text-white bg-black rounded-sm w-[50px] text-center'>USE</li>
                <li className='text-xl'>{e.desc}</li>
                <li className='text-xl'>{e.desc2}</li>
                <li className='text-xl'>{e.desc3}</li>   
              </ul>
              </Link>
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