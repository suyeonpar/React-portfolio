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

function App() { 

  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };



  return (
    <>
    <Header darkMode={darkMode} setDarkMode={setDarkMode} />
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/sam' element={<Sample />} />
      <Route path='/about' element={<About />} />
      <Route path='/e' element={<Ex />} />
      <Route path='/*' element={<Notfound />} />
    </Routes>
    </>
  );
}

export default App;
