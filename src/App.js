import './App.css';
import { useTranslation } from 'react-i18next'
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Content from './components/Content';
import About from './pages/About';
import { useEffect, useState } from 'react';
import './index.css'
import Notfound from './pages/Notfound';
import Workpage from './pages/Workpage';
import Renewpage from './pages/Renewpage';
import Header from './components/Header';
import Footer from './components/Footer';
import Lang from './components/Lang';
import { I18nextProvider } from 'react-i18next';
import i18n from './lang/i18n';

function App() { 

  const { t, i18n } = useTranslation()
  const changelanguageToKo = () => i18n.changeLanguage('ko')
  const changelanguageToEn = () => i18n.changeLanguage('en')

  //다크모드
  const savedDarkMode = localStorage.getItem('dark');
  const isDarkMode = savedDarkMode ? savedDarkMode === 'true' : false;
  const [dark, setDark] = useState(isDarkMode);

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('dark', dark ? 'true' : 'false');
  }, [dark]);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <>
    <I18nextProvider i18n={i18n}>
    <Header dark={dark} toggleDarkMode={toggleDarkMode} />
    <Routes>
      <Route path='/' element={<Main dark={dark} toggleDarkMode={toggleDarkMode} />}></Route>
      <Route path='/about' element={<About dark={dark} toggleDarkMode={toggleDarkMode} />} />
      <Route path='/content' element={<Content />} />
      <Route path='/workpage' element={<Workpage dark={dark} toggleDarkMode={toggleDarkMode} />} />
      <Route path='/renewpage' element={<Renewpage dark={dark} toggleDarkMode={toggleDarkMode} />} />
      <Route path='/lang' element={<Lang changelanguageToKo={changelanguageToKo} changelanguageToEn={changelanguageToEn} />} />
      <Route path='/*' element={<Notfound dark={dark} toggleDarkMode={toggleDarkMode} />} />
    </Routes>
    <Footer />
    </I18nextProvider>
    </>
  );
}

export default App;
