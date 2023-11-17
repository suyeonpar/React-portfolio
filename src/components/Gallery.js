import React, { useEffect } from 'react'
import contentdata from '../data/ContentData'
import { useState } from 'react';
import { createStars } from '../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    <div className="flex flex-wrap items-center mx-auto max-w-7xl">
      <div className={`h-[40px] w-[80%] leading-[40px] bg-[#010b1a] border rounded-md overflow-hidden relative text-center mx-auto ${dark ? `border-gray-200` : ``} md:h-[50px] lg:h-[60px] md:w-full`}>
        <div className='flex w-[82%] h-full justify-between mx-auto md:w-[80%] lg:w-[85%] items-center'>
          <p className={`text-white text-[12px] cursor-pointer md:text-xl
          ${txt === -1 ? 'text-[14px] md:text-2xl lg:text-3xl font-bold on' : ''}`} onClick={() => {setTxt(-1);}}>ALL</p>
          {
            FilterId &&
            FilterId.map((e,i)=>{
              return(
                <span key={i} className={`text-white text-[12px] leading-[60px] text-on cursor-pointer md:text-xl lg:text-2xl
                ${txt === i ? 'text-[14px] md:text-2xl lg:text-3xl font-bold on' : ''}`}
                 onClick={()=>{
                 setTxt(i)
                }}>{e}</span>
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
        <div className={`mb-2 ml-12 basis-full md:ml-10 md:mb-5 lg:ml-0 ${dark ? `text-white` : ``}`}>
          <p className='text-sm md:text-xl'><span className='font-bold'>TOTAL: </span>{DataFilter.length}</p>
        </div>
        {
          DataFilter &&
          DataFilter.map((e,i)=>{
            return(
              <>
              <div key={i} className={`${dark ? `bg-gray-200` : `bg-white`} basis-4/5 md:basis-[90%] lg:basis-full h-auto lg:h-[400px] border mb-10 mx-auto relative`}>
                <div className="flex flex-wrap justify-start w-[95%] mx-auto text-center mt-5">
                  <img src={e.img} alt={e.title} className='mb-2 basis-full lg:basis-[55%] md:mb-3 lg:mr-7 border cursor-pointer shadow-sm group' onClick={()=>{OpenNewTab(e.URL)}} />
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
                      <p className='text-sm font-bold md:text-2xl'>Use</p>
                      <p className='text-sm md:text-2xl'>{e.desc}</p>
                      <p className='text-sm md:text-2xl'>{e.desc2}</p>
                      <p className='text-sm md:text-2xl'>{e.desc3}</p>
                    </div>
                  </div> 
                  <div className='absolute bottom-2 right-2 md:right-3 lg:right-5 lg:bottom-7'>
                    {
                      e.nimg &&
                      <img src={e.nimg} alt='노션 이미지' onClick={()=>{OpenNewTab(e.notionURL)}} className='mb-1 cursor-pointer w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10'/>
                    }
                    <div>
                    <FontAwesomeIcon icon={e.icon} onClick={()=>{OpenNewTab(e.gitURL)}} className={`text-2xl cursor-pointer md:text-3xl lg:text-4xl ${dark ? `bg-white rounded-[50%]` : ``}`} />
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