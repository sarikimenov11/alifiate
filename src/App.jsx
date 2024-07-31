// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Partners from './components/Partners'; // Импортируем новый компонент

const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Partners /> {/* Добавляем новый компонент */}
    </>
  );
};

export default App;
