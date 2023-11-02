import React, { useEffect, useState } from 'react'


function Use() {

  const descData = [
    {
      id: 1,
      title: "lorem1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: 2,
      title: "lorem2",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: 3,
      title: "lorem3",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ]
 
  return (
    <>
    <div className='w-full mx-auto mb-20'>
      <div className='flex flex-wrap justify-between h-full mx-auto max-w-7xl'>
        <div className='bg-[#eee] border w-[45%] h-[200px] md:h-[600px] lg:h-[600px] mx-auto rounded-md basis-4/5 mb-5 md:basis-[48%]'></div>
        <div className='overflow-y-scroll inner-custom" w-[45%] h-[200px] md:h-[600px] lg:h-[600px] bg-[#eee] shadow-inner border mx-auto rounded-md basis-4/5 md:basis-[48%] overflow-hidden'>
          {
            descData &&
            descData.map((e,i)=>{
              return(
                <div key={i}>
                  <h3 className='text-2xl md:text-3xl'></h3>
                  <p>{e.desc}</p>
                </div>
              )
            })
          }
        </div>
      </div> 
    </div>
    </>
  )
}

export default Use