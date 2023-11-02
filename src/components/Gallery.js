import React from 'react'
import contentdata from '../data/ContentData'

function Gallery() {
  
  //새로운창 연결
  const OpenNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <>
    <div className='w-full mx-auto mt-32'>
      <div className='flex flex-wrap justify-between mx-auto max-w-7xl'>
        {
          contentdata &&
          contentdata.map((e,i)=>{
            return(
              <>
              <div key={i} className='bg-white basis-full h-[400px] border mb-10'>
                <div className="flex justify-start w-[95%] mx-auto text-center mt-5">
                  <img src={e.img} alt={e.title} className='mb-2 mr-7 md:w-[200px] lg:mb-5 md:mb-5 border cursor-pointer' onClick={()=>{OpenNewTab(e.URL)}} />
                  <div className="w-4/5">
                    <p className='mb-2 text-3xl font-bold'>{e.id}</p>
                    <p>{e.title}</p>
                    <div className="flex items-center mx-auto mt-5">
                      <div className="w-1/2 mt-10 text-start">
                        <p className='text-white bg-black rounded-sm w-[50px] text-center'>USE</p>
                        <p className='text-xl'>{e.desc}</p>
                        <p className='text-xl'>{e.desc2}</p>
                        <p className='text-xl'>{e.desc3}</p>
                      </div>
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
    </>
  )
}

export default Gallery