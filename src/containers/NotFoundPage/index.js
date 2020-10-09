import React from 'react';

import cls from './style.module.scss';
import penguin from '../../assets/images/penguin.png';

const NotFoundPage = () => {
  return (
    <div className={cls.page__wrapper}>
      <div className={cls.page}>
        <img src={penguin} alt="Penguin" />
        <div className={cls.page__content}>
          <h1>404</h1>
          <p>Đường dẫn không hợp lệ</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
