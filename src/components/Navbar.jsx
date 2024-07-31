import React, { useState } from 'react';
import './Navbar.css';
import betrich from '../assets/betrich.png';
import Register from './Register';
import Signin from './signin'; // Use capitalized name for components

const Navbar = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [language, setLanguage] = useState('RU'); // Added state for language

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  const toggleSignin = () => {
    setShowSignin(!showSignin);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'RU' ? 'EN' : 'RU');
  };

  const text = {
    RU: {
      signIn: 'Войти',
      signUp: 'Регистрация',
      language: 'РУС'
    },
    EN: {
      signIn: 'Sign In',
      signUp: 'Sign Up',
      language: 'ENG'
    }
  };

  return (
    <>
      <nav className="nav">
        <div className="logo-container">
          <img src={betrich} alt="Betrich Logo" className='logo' />
        </div>
        <div className="nav-links">
          <button className="sign-in" onClick={toggleSignin}>{text[language].signIn}</button>
          <button className="sign-up" onClick={toggleRegister}>{text[language].signUp}</button>
          <div className="language-switcher" onClick={toggleLanguage}>{text[language].language}</div>
        </div>
      </nav>
      {showRegister && <Register onClose={toggleRegister} />}
      {showSignin && <Signin onClose={toggleSignin} />}
    </>
  );
};

export default Navbar;
