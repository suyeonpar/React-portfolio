import React, { useState } from 'react'
import './../index.css'

function Board({ dark }) {

  const [InputCnt, setInputCnt] = useState(0);
  const [maxLength, setMaxLength] = useState(30);
  
  //댓글 글자수 제한
  const InputText = (Comment, setComment) => {
    if (Comment.length >= maxLength) {
      setComment(Comment.slice(0, maxLength));
    }
    setInputCnt(Comment.length);
  };
  
  //댓글 작성
  const [Comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  
  const addComments = () => {
    if (Comment.length === 0) {
      alert("의견의 없나요? 자유롭게 달아주세요!");
    } else {
      alert("소중한 의견 감사합니다.");
      setComments([...comments, Comment]);
      setComment("");
    }
  };

  // 댓글삭제
  const deleteComment = (idx) => {
    const newComments = [...comments];
    newComments.splice(idx, 1);
    setComments(newComments);
    alert("삭제되었습니다.")
  };
  
  return (
    <>
    <div className='w-full h-auto mx-auto text-center'>
      <h3 className={`text-3xl font-bold md:text-6xl ${dark ? 'text-white' : 'text-black'}`}>OPINION</h3>
      <p className={`mt-4 text-sm ${dark ? `text-white` : `text-[#999]`} md:text-2xl`}>간단하게 의견을 남겨주세요 :{")"}</p>
      <div className='flex flex-wrap justify-between mx-auto mt-10 max-w-7xl'>
        <div className="overflow-hidden overflow-y-scroll h-28 md:h-40 bg-white border rounded-md basis-[75%] mb-5 mx-auto md:basis-[62%] lg:basis-1/2">
        {
          comments &&
          comments.map((Comment,i)=>{
            return(
              <div key={i} className='flex items-center justify-around p-1 text-xs border-b md:p-3 text-start md:text-xl'>
                <p className='basis-[70%]'>{Comment}</p>
                <button onClick={deleteComment} className='px-2 py-1 text-white bg-black border-gray-100 rounded-md'>삭제</button>
              </div>
            )
          })
        }
        </div>
        <div className='flex flex-col items-center justify-center mx-auto mb-20 text-center'>
          <textarea
            rows="5"
            cols="45"
            maxLength={maxLength}
            className="p-2 text-xs text-black placeholder-gray-400 border rounded md:text-xl"
            placeholder="의견 작성하기."
            value={Comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          ></textarea>
          <p className={`${dark ? `text-white` : ``} pb-2`}>{Comment.length}/{maxLength}자</p>
          <button className={`p-2 text-sm border rounded-md text-white bg-black md:text-xl ${dark ? `border-[#ddd] bg-[#5E5BE3]` : ``}`} onClick={addComments}>작성하기</button>
        </div>
      </div>
    </div>
    </>
  )
}
  
export default Board