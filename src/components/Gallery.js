import React, { useEffect } from 'react'
import contentdata from '../data/ContentData'
import { useState } from 'react';
import { createStars } from '../store';
import Slide from './Slide';

function Gallery({ dark }) {

  // 필터
  const txtList = ["Project", "Clone", "Mini.P", "Game"];
  const [txt, setTxt] = useState(-1);
  const FilterId = [...new Set(contentdata.map(e => e.id))];
  const [DataFilter, setDataFilter] = useState([]);

  // pagination
  const [totalCnt, setTotalCnt] = useState(0);
  const [page, setPage] = useState(1);
  const lastPage = Math.ceil(totalCnt / 1);
  const totalPageCnt = 5;
  const startPage = Math.floor((page - 1) / totalPageCnt)* totalPageCnt + 1;
  const endPage = Math.min(lastPage, startPage + totalPageCnt - 1);

  useEffect(() => {
    if (txt === -1) {
      setDataFilter(contentdata);
    } else {
      const filteredData = contentdata.filter(e => e.id === txtList[txt]);
      setDataFilter(filteredData);
    }
  }, [txt]);
  
  //새로운창 연결
  const OpenNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  // 별
  const Stars = 2000;
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(800);
  const [rewidth, setReWidth] = useState(1920);
  const [reheight, setReHeight] = useState(-800);

  const [stars, setStars] = useState([]);
  const [restars, setRestars] = useState([]);

  useEffect(() => {
    const { stars, restars } = createStars(Stars, width, height, rewidth, reheight);
    setStars(stars);
    setRestars(restars);
  }, [Stars, width, height, rewidth, reheight]);

  return (
    <>
    <div className="flex flex-wrap items-center mx-auto">
        <div className={`h-[40px] w-[80%] leading-[40px] bg-[#010b1a] border rounded-md overflow-hidden relative text-center mx-auto ${dark ? `border-gray-200` : ``} md:h-[60px] md:w-[60%]`}>
        <div className='flex w-[82%] h-full justify-between mx-auto md:w-[80%] lg:w-[85%] items-center'>
            <p className={`text-white text-[12px] cursor-pointer md:text-2xl
            ${txt === -1 ? 'text-[14px] md:text-3xl lg:text-4xl font-bold on' : ''}`} onClick={() => {setTxt(-1);}}>ALL</p>
            {
              FilterId &&
              FilterId.map((e,i)=>{
                return(
                  <p key={i} className={`text-white text-[12px] leading-[60px] text-on cursor-pointer md:text-xl lg:text-2xl
                  ${txt === i ? 'text-[14px] md:text-2xl lg:text-4xl font-bold on' : ''}`}
                   onClick={()=>{
                   setTxt(i)
                  }}>{e}</p>
                )
              })
            }
          </div>
          <div className='flex w-[82%] h-full justify-between mx-auto md:w-[80%] lg:w-[85%] items-center'>
          </div>
          <div className='relative h-full custom-spin-animation'> 
            {stars &&
              stars.map((e,i) => (
                <div
                  key={i}
                  className="absolute -top-[50px] bg-white rounded-full"
                  style={{
                    left: `${e.x}px`,
                    top: `${e.y}px`,
                    width: `${e.size}px`,
                    height: `${e.size}px`,
                  }}
                ></div>
              )
            )}
          </div>
          <div className='relative custom-spin-animation2'> 
          {restars &&
            restars.map((e, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full overflow-hidden left-[50%]"
                style={{
                  left: `${e.x}px`,
                  top: `${e.y}px`,
                  width: `${e.size}px`,
                  height: `${e.size}px`,
                  animationDelay: `${e.animationDelay}s`
                }}
              >
              </div>
            ))
          }
        </div>
      </div>
      </div>
    <div className='w-full mx-auto mt-7 md:mt-10'>
      <div className='flex flex-wrap justify-between mx-auto max-w-7xl'>
        <div className='mb-2 ml-12 basis-full md:ml-0 md:mb-5'>
          <p className={`${dark ? `text-white` : `text-black`} text-sm md:text-xl `}><span className={`${dark ? `text-white` : `text-black`} font-bold`}>TOTAL: </span>{DataFilter.length}</p>
        </div>
        {
          DataFilter &&
          DataFilter.map((e,i)=>{
            return(
              <>
              <div key={i} className='bg-white basis-4/5 md:basis-full h-auto md:h-[400px] border mb-10 mx-auto'>
                <div className="flex flex-wrap justify-start w-[95%] mx-auto text-center mt-5">
                  <img src={e.img} alt={e.title} className='mb-2 basis-full md:basis-[55%] md:mr-7 md:mb-0 border cursor-pointer shadow-sm' onClick={()=>{OpenNewTab(e.URL)}} />
                  <div className="text-start">
                    <div className='mb-2 md:mb-5'>
                      <p className='text-sm font-bold md-0 md:mb-2 md:text-2xl'>{e.id}</p>
                      <p className='text-sm md:text-2xl'>{e.title}</p>
                    </div>
                    <div className='mb-2 md:mb-5'>
                      <p className='text-sm font-bold md:text-2xl'>Work hours</p>
                      <p className='text-sm md:text-2xl'>{e.day}</p>
                    </div>
                    <div className='mb-2 md:mb-5'>
                      <p className='text-sm font-bold md:text-2xl'>USE</p>
                      <p className='text-sm md:text-2xl'>{e.desc}</p>
                      <p className='text-sm md:text-2xl'>{e.desc2}</p>
                      <p className='text-sm md:text-2xl'>{e.desc3}</p>
                    </div>
                  </div>
                </div>
              </div>
              </>
            )
          })
        }
      </div>
    </div>
    {/* <div className="flex justify-center gap-x-5">
            <>
            {page > 5 && <button className='mt-5 border px-1.5 py-1.5 bg-white rounded-md text-sm mb-20' onClick={()=>{setPage(page - 5)}}>이전</button>}
            {
                Array(endPage - startPage + 1).fill(null).map((_, i) => {
                const pageNumber = i + startPage;
                    return (
                        <button className={`mb-20 mt-5 rounded-md text-sm border px-3 py-1.5 ${page === pageNumber ? `bg-pink-300 text-white` : `bg-white`}`} key={i} onClick={() => { setPage(pageNumber) }}>{pageNumber}</button>
                    );
                })
            }
            {page < lastPage && <button className='mt-5 border px-1.5 py-1.5 bg-white rounded-md text-sm mb-20' onClick={()=>{setPage(page + 5)}}>다음</button>}
            </>
        </div> */}
    </>
  )
}

export default Gallery