import React, { useState } from "react";
import logoLight from './image/logo_light.png';
import logoDark from './image/logo_dark.png';
import './style.css';

export default function Header() {
  const [theme, setTheme] = useState('light'); 
  const [logo, setLogo] = useState(logoLight); 

  // Função para alternar o tema
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setLogo(logoDark); 
      document.documentElement.setAttribute('data-theme', 'dark'); 
    } else {
      setTheme('light');
      setLogo(logoLight); 
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  return (
    <header>
      <div className="header__brand">
        <img id="logo" src={logo} alt="Logo" />
      </div>
      <div className="header__toggle">
        <i
          id="toggleTheme"
          className={`bi ${theme === 'light' ? 'bi-moon-stars' : 'bi-sun'}`}
          onClick={toggleTheme}
        ></i>
      </div>
    </header>
  );
}
