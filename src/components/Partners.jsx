// src/components/Partners.jsx
import React from 'react';
import pandaImg from '/src/assets/panda.png';
import wolfImg from '/src/assets/wolf.png';
import eagleImg from '/src/assets/eagle.png';
import bullImg from '/src/assets/bull.png';
import './Partners.css'; // Подключим стили

const Partners = () => {
  return (
    <section className="partners-section">
      <h2 className='h23'>Кто наши партнеры?</h2>
      <p className='poss'> <span className='spann'> <b>Более 100 000+</b></span> партнеров работают с Affiliate Top каждый день. <div className='simple-div'>Они говорят, что им все нравится.</div></p>
      <div className="partners-cards">
        <div className="partner-card">
          <img src={pandaImg} alt="Панда блогер" />
          <h3 className='h3'>Блогеры</h3>
          <p className='p'>Публикуют партнерские ссылки на YouTube, в TikTok, в Telegram и других соцсетях.</p>
        </div>
        <div className="partner-card">
          <img src={wolfImg} alt="Веб-мастер волк" />
          <h3 className='h3'>Веб-мастера</h3>
          <p className='p'>Создают контент про трейдинг, работают с сайтами и трафиком.</p>
        </div>
        <div className="partner-card">
          <img src={eagleImg} alt="Маркетолог орел" />
          <h3 className='h3'>Маркетологи</h3>
          <p className='p'>Работают в маркетинге и знают, как привлекать и удерживать клиентов.</p>
        </div>
        <div className="partner-card">
          <img src={bullImg} alt="Начинающий бык" />
          <h3 className='h3'>Начинающие</h3>
          <p className='p'>Интересуются трейдингом, хотят развивать свои соцсети, чтобы на них зарабатывать.</p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
