import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

function Workpage({dark, toggleDarkMode, navigate}) {


  return (
    <>
    <div>
      
    </div>
    <span onClick={() => navigate(-1)} className={`cursor-pointer mr-5 text-sm md:text-2xl ${dark ? `text-white` : ``}`}>Back</span>
    </>
  )
}

export default Workpage