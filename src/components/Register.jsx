import React, { useState } from 'react';
import './RegisterModal.css';
import betrich from '../assets/betrich.png';
import SignIn from './signin'; // Импортируем компонент для входа

const Register = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [showSignIn, setShowSignIn] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '', phone: '', address: '' });

  

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const handleClose = () => {
    setShowSignIn(false);
    onClose();
  };

  if (showSignIn) {
    return <SignIn onClose={handleClose} />;
  }
  
  const validateForm = () => {
    const newErrors = { email: '', password: '', phone: '', address: '' };
    let isValid = true;

    if (!email) {
      newErrors.email = 'Эл. почта обязательна';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Неверный формат электронной почты';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Пароль обязателен';
      isValid = false;
    }

    if (!phone) {
      newErrors.phone = 'Номер телефона обязателен';
      isValid = false;
    } else if (!/^\d{10,15}$/.test(phone)) {
      newErrors.phone = 'Неверный формат номера телефона';
      isValid = false;
    }

    if (!address) {
      newErrors.address = 'Адрес обязателен';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Submit form logic here
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Phone:', phone);
      console.log('Address:', address);
      // You can replace the above console.log with an API call to your server
    }
  };
  

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <div className="logo-container">
          <img src={betrich} alt="Betrich Logo" className='logo' />
        </div>
        <h2>Добро пожаловать в партнерскую программу!</h2>
        <p>Введите адрес электронной почты, пароль, телефон и адрес, чтобы создать аккаунт</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Эл. почта</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Номер телефона</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              required
            />
            <label htmlFor="agreement">Я принимаю условия <a href="https://www.advgazeta.ru/ag-expert/advices/partnerskoe-soglashenie-podderzhka-dlya-biznesa-v-usloviyakh-turbulentnosti/">Партнерского соглашения</a> и <a href="https://policies.google.com/privacy?hl=ru">Политики конфиденциальности</a></label>
          </div>
          <button type="submit" className="submit-button">Зарегистрироваться</button>
        </form>
        <p>У вас уже есть аккаунт? <a href="#" onClick={handleSignInClick}>Войти</a></p>
      </div>
    </div>
  );
};

export default Register;
