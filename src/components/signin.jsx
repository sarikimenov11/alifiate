import React from 'react';
import './signin.css';
import betrich from '../assets/betrich.png';

const SignIn = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <div className="logo-container">
          <img src={betrich} alt="Affiliate Top Logo" className='logo' />
        </div>
        <h2>Добро пожаловать в партнерскую программу!</h2>
        <p>Введите адрес электронной почты и пароль для входа в свой аккаунт</p>
        <form>
          <div className="form-group">
            <label htmlFor="email">Эл. почта</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              id="remember"
              name="remember"
            />
            <label htmlFor="remember">Запомнить меня</label>
          </div>
          <button type="submit" className="submit-button">Войти</button>
        </form>
        <p>Нет аккаунта? <a href="#" onClick={() => window.location.reload()}>Регистрация</a></p>
      </div>
    </div>
  );
};

export default SignIn;
