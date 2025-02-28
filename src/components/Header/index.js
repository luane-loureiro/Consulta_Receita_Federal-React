import React, { useState } from "react";
import logoLight from './image/logo_light.png';
import logoDark from './image/logo_dark.png';
import './style.css';

export default function Header() {
  const [theme, setTheme] = useState('light'); // Estado para controlar o tema
  const [logo, setLogo] = useState(logoLight); // Estado para controlar o logo

  // Função para alternar o tema
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setLogo(logoDark); // Muda o logo para o tema escuro
      document.documentElement.setAttribute('data-theme', 'dark'); // Altera o atributo data-theme para 'dark'
    } else {
      setTheme('light');
      setLogo(logoLight); // Muda o logo para o tema claro
      document.documentElement.setAttribute('data-theme', 'light'); // Altera o atributo data-theme para 'light'
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
          className={`bi ${theme === 'light' ? 'bi-moon-stars' : 'bi-sun'}`} // Altera o ícone dependendo do tema
          onClick={toggleTheme}
        ></i>
      </div>
    </header>
  );
}
