import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Aside from './components/Aside';
import Sample from './pages/Sample';
import About from './pages/About';
import Notfound from './pages/Notfound';
import { useState } from 'react';
import Ex from './pages/Ex';
import './index.css'
import Gallery from './components/Gallery';
import Slide from './pages/Slide';

function App() { 

  //다크모드
  const [dark, setDark] = useState(false);
  const toggleDarkMode = () =>{
    setDark(!dark);
  }

  //별배경
  const Stars = 2000;
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(800);
  const [rewidth, setReWidth] = useState(1920);
  const [reheight, setReHeight] = useState(-800);
  
  const createRandomStar = () => {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const size = Math.random() * 2;
    const animationDelay = Math.random() * 5;
    return { x, y, size, animationDelay };
  };

  const reverseStar = () => {
    const x = Math.random() * rewidth;
    const y = Math.random() * reheight;
    const size = Math.random() * 2;
    const animationDelay = Math.random() * 5;
    return { x, y, size, animationDelay };
  };
  
  const stars = Array.from({ length: Stars }, createRandomStar);
  const restars = Array.from({ length: Stars}, reverseStar);

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Main Stars={Stars} stars={stars} restars={restars} />}></Route>
      <Route path='/sam' element={<Sample />} />
      <Route path='/about' element={<About dark={dark} toggleDarkMode={toggleDarkMode} />} />
      <Route path='/e' element={<Ex />} />
      <Route path='/*' element={<Notfound />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/slide' element={<Slide Stars={Stars} stars={stars} restars={restars} />} />
      <Route path='/content' element={<Content />} />
    </Routes>
    </>
  );
}

export default App;
