import React, { useState, useEffect } from 'react';

import { Test1, Text } from '../../components';
// import cls from './style.module.scss';

import textApi from '../../apis/textApi';

const Main1 = () => {
  // InitialState
  let [text, setText] = useState('');
  let [currentTexts, setCurrentTexts] = useState([]);
  let [userInput, setUserInput] = useState('');

  let [startNumber, setStartNumber] = useState(0);
  let [endNumber, setEndNumber] = useState(40);

  let [symbols, setSymbols] = useState(0);
  let [sec, setSec] = useState(30);

  let interval;

  const inputElement = React.createRef();

  useEffect(() => {
    async function fetchData() {
      try {
        let { status, data: { text } } = await textApi.getRandomText();

        if (status !== 'success' || !text) {
          throw new Error('Có lỗi xảy ra');
        }

        setText(currentText => text);
        setCurrentTexts(currentTexts =>
          text.split('').slice(startNumber, endNumber)
        );
      } catch (error) {
        console.log(error);
        return;
      } 
    }

    fetchData();
  }, []);

  useEffect(() => {
    setCurrentTexts(oldcurrentTexts => {
      return text.split('').slice(startNumber, endNumber);
    });
  }, [startNumber, endNumber]);

  const onChangeInput = (evt) => {
    let value = evt.target.value;
    // console.log(value.length);

    if (value.length > userInput.length && userInput.length - startNumber > 5) {
      // console.log('Done');
      setStartNumber(currentNumber => currentNumber + 1);
      setEndNumber(currentNumber => currentNumber + 1);
    }

    setSymbols(currenntSymbols => countSymbols(value));
    setUserInput(currentInput => value);
  };

  const countSymbols = (input) => {
    const countTexts = text.replace(' ', '');
    return userInput
      .replace(' ', '')
      .split('')
      .filter((s, i) => s === countTexts[i]).length;
  };

  const onFinish = () => {
    clearInterval(interval);
  };

  const onStart = () => {
    interval = setInterval(() => {
      setSec(currentSec => {
        if(currentSec === 0) {
          onFinish();
          return currentSec;
        }
        return currentSec-1
      });
    }, 1000);
    inputElement.current.focus();
  };

  const reStart = () => {

  };

  return (
    <div>
      <Test1 symbols={symbols} sec={sec} textLength={userInput.trim().length}/>
      <Text texts={currentTexts} input={userInput} start={startNumber} />
      <input
        ref={inputElement}
        value={userInput}
        onChange={onChangeInput}
      />
      <button onClick={onStart}>Click</button>
    </div>
  );
};

export default Main1;
