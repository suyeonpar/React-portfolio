import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Main />}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
