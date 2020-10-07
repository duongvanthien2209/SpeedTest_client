import React from 'react';
import classNames from 'classnames';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

import { Input, Button } from 'reactstrap';

const Test = ({ buttonDisable, text, userInput, wpm, onRestart }) => {
  text = text.split('');

  return (
    <div className={classNames('test', { 'test-able': buttonDisable })}>
      <div className="test__number">
        <h1>{wpm}</h1>
        <span>Wpm</span>
      </div>

      <div className="test__content text-white">
        {text.map((s, i) => {
          let color;
          if (i < userInput.length) {
            color = s === userInput[i] ? '#dfffa0' : '#fcbea4';
          }

          return (
            <span key={i} style={{ background: color }}>
              {s}
            </span>
          );
        })}
      </div>

      <Button
        outline
        color="primary"
        className="test__button btn-lg"
        onClick={onRestart}
      >
        <FontAwesomeIcon icon={faRedo} />
      </Button>
    </div>
  );
};

export default Test;
