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
import Gallery from './components/Gallery';
import Slide from './components/Slide';

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
  
  const [stars, setStars] = useState([]);
  const [restars, setRestars] = useState([]);

  useEffect(() => {

    const createRandomStar = () => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * 2;
      const animationDelay = Math.random() * 5;
      return { x, y, size, animationDelay };
    };

    const starsArray = Array.from({ length: Stars }, createRandomStar);
    setStars(starsArray);

    const reverseStar = () => {
      const x = Math.random() * rewidth;
      const y = Math.random() * reheight;
      const size = Math.random() * 2;
      const animationDelay = Math.random() * 5;
      return { x, y, size, animationDelay };
    };

    const restarsArray = Array.from({ length: Stars }, reverseStar);
    setRestars(restarsArray);
  }, []);

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/sam' element={<Sample />} />
      <Route path='/about' element={<About dark={dark} toggleDarkMode={toggleDarkMode} />} />
      <Route path='/e' element={<Ex />} />
      <Route path='/gallery' element={<Gallery stars={stars} restars={restars} />} />
      <Route path='/content' element={<Content />} />
      <Route path='/*' element={<Notfound />} />
    </Routes>
    </>
  );
}

export default App;
