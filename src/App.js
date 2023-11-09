import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Aside from './components/Aside';
import Sample from './pages/Sample';
import About from './pages/About';
import Notfound from './pages/Notfound';
import { useEffect, useState } from 'react';
import Ex from './pages/Ex';
import './index.css'

function App() { 

  //다크모드
  const [dark, setDark] = useState(false);
  const toggleDarkMode = () =>{
    setDark(!dark);
  }

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/sam' element={<Sample />} />
      <Route path='/about' element={<About dark={dark} toggleDarkMode={toggleDarkMode} />} />
      <Route path='/e' element={<Ex />} />
      <Route path='/content' element={<Content />} />
      <Route path='/*' element={<Notfound />} />
    </Routes>
    </>
  );
}

export default App;
