import React from 'react';
import './Services.css';
import binomo from '../assets/binomo.png';
import stockity from '../assets/stockity.png';
import traditex from '../assets/traditex.png';
import quanti from '../assets/quanti.png';

const Services = () => {
  return (
    <div className="services-container">
      <div className='divo'>
        <h4 className='h43'>Выберите вашу платформу</h4>
        <p className='posss'><b>Контролируйте сразу несколько трейдинг-платформ <span className='spano'>на одной странице.</span></b></p>
      </div>
      <div className="platforms-grid">
        <div className="platform-card">
          <img src={binomo} alt="Binomo" className="icon" />
          <h2 className="platform-title">Binomo</h2>
          <p className="platform-description">
           <b> Популярная платформа, на которой ежедневно торгуют более 3 миллионов трейдеров из 130 стран.</b>
          </p>
          <div className="tags">
            <span className="tag">CPA</span>
            <span className="tag">Turnover Share</span>
            <span className="tag">Revenue Share</span>
            <span className="tag">Гибрид</span>
          </div>
        </div>
        <div className="platform-card">
          <img src={stockity} alt="Stockity" className="icon" />
          <h2 className="platform-title">Stockity</h2>
          <p className="platform-description">
           <b>Быстрорастущая платформа с удобным интерфейсом, подходящая для начинающих и опытных трейдеров.</b> 
          </p>
          <div className="tags">
            <span className="tag">CPA</span>
            <span className="tag">Turnover Share</span>
          </div>
        </div>
        <div className="platform-card">
          <img src={traditex} alt="QuantaFund" className="icon" />
          <h2 className="platform-title">QuantaFund</h2>
          <p className="platform-description">
            <b>Современная настраиваемая платформа, которая предлагает трейдерам более 8 механик для торговли.</b>
          </p>
          <div className="tags">
            <span className="tagi"><b>Скоро появится</b></span>
          </div>
        </div>
        <div className="platform-card">
          <img src={quanti} alt="Traditex" className="icon" />
          <h2 className="platform-title">Traditex</h2>
          <p className="platform-description">
           <b>Профессиональная платформа с широким выбором инструментов технического анализа.</b> 
          </p>
          <div className="tags">
            <span className="tagi"><b></b>Скоро появится</span>
          </div>    
        </div>
      </div>
    </div>
  );
};

export default Services;
