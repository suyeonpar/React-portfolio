import React, { useEffect, useState } from 'react';

const Ex = () => {
    
    const [dark, setIsDark] = useState(false);
    
    useEffect(() => {
        const darkMode = localStorage.getItem('dark');
        if (darkMode) {
          setIsDark(true);
          document.querySelector('html').classList.add('dark');
        }
      }, []);
    
      const toggleDarkMode = () => {
        if (dark) {
          setIsDark(false);
          document.querySelector('html').classList.remove('dark');
          localStorage.removeItem('dark');
        } else {
          setIsDark(true);
          document.querySelector('html').classList.add('dark');
          localStorage.setItem('dark', 'true');
        }
      };
    
      return (
        <>
        <div>
          {/* 나머지 앱 내용 */}
          <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </div>
        </>
      );
    };

export default Ex;
