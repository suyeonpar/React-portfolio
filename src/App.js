import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Main />}></Route>
    </Routes>
    <Content />
    <Footer />
    </>
  );
}

export default App;
