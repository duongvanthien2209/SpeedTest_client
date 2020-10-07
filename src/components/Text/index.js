import React from 'react';

import cls from './style.module.scss';

const Text = ({ texts, input, start }) => {
  return (
    <div className={cls.text}>
      {texts.map((p, key) => {
        let color;

        if (start + key < input.length) {
          color = input[start + key] === p ? '#dfffa0' : '#fcbea4';
        }

        return p === ' ' ? (
          <div className={cls.text__space}></div>
        ) : (
          <span style={{ backgroundColor: color }} key={key}>
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Text;
