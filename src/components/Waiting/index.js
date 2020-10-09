import React from 'react';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

import cls from './style.module.scss';

const Waiting = ({ isWaiting }) => {
  return (
    isWaiting && (
      <div className={cls['waiting__wrapper']}>
        <div className="waiting">
          <FontAwesomeIcon className="fa-spin fa-5x" icon={faSync} />
        </div>
      </div>
    )
  );
};

export default Waiting;
