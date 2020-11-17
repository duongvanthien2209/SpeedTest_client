import React, { Component } from 'react';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo, faPlay } from '@fortawesome/free-solid-svg-icons';

import { Test, Text, CustomModal } from '../../components';
import cls from './style.module.scss';

// Constant
import { base_sec, base_letters } from '../../constants';

import textApi from '../../apis/textApi';

const initialState = {
  text: '',
  currentTexts: [],
  userInput: '',
  startNumber: 0,
  endNumber: base_letters,
  symbols: 0,
  sec: base_sec,
  modal: false,
  isButton: false,
  isStart: false,
};

class Main1 extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    this.inputElement = React.createRef();

    this.toggle = this.toggle.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.countSymbols = this.countSymbols.bind(this);
    this.onFinish = this.onFinish.bind(this);
    this.onStart = this.onStart.bind(this);
    this.reStart = this.reStart.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.props.setIsWaiting(currentIsWaiting => true);
    this.fetchData();
  }

  async fetchData() {
    try {
      let {
        status,
        data: { text },
      } = await textApi.getRandomText();

      if (status !== 'success' || !text) {
        throw new Error('Có lỗi xảy ra');
      }

      this.setState(currentState => ({
        text,
        currentTexts: text
          .split('')
          .slice(this.state.startNumber, this.state.endNumber),
      }));
      this.props.setIsWaiting(currentIsWaiting => false);
    } catch (error) {
      this.props.toast.error('Không tải được dữ liệu, vui lòng thử lại');
      this.props.setIsWaiting(currentIsWaiting => false);
      return;
    }
  }

  toggle() {
    this.setState(currentState => ({
      modal: !this.state.modal,
    }));
  }

  onChangeInput(evt) {
    if (this.state.isStart) {
      let value = evt.target.value;

      if (
        value.length > this.state.userInput.length &&
        this.state.userInput.length - this.state.startNumber > 5
      ) {
        this.setState(currentState => ({
          startNumber: this.state.startNumber + 1,
          endNumber: this.state.endNumber + 1,
          currentTexts: this.state.text
            .split('')
            .slice(this.state.startNumber + 1, this.state.endNumber + 1),
        }));
      }

      this.setState(currentState => ({
        symbols: this.countSymbols(value),
        userInput: value,
      }));
    }
  }

  countSymbols(input) {
    const countTexts = this.state.text.replace(' ', '');
    return this.state.userInput
      .replace(' ', '')
      .split('')
      .filter((s, i) => s === countTexts[i]).length;
  }

  onFinish() {
    clearInterval(this.interval);
    this.setState(currentState => ({
      isStart: false,
    }));
    this.toggle();
  }

  onStart() {
    this.interval = setInterval(
      (() => {
        if (this.state.sec === 0) {
          this.onFinish();
        } else {
          this.setState(currentState => ({
            sec: this.state.sec - 1,
          }));
        }
        // eslint-disable-next-line no-extra-bind
      }).bind(this),
      1000,
    );
    this.setState(currentState => ({
      isStart: true,
      isButton: true,
    }));
    this.inputElement.current.focus();
  }

  reStart() {
    clearInterval(this.interval);
    this.setState(currentState => initialState);
    this.fetchData();
  }

  render() {
    let wpm = 0;

    if (this.state.symbols !== 0 && 120 - this.state.sec !== 0) {
      wpm = Math.round(this.state.symbols / 5 / ((120 - this.state.sec) / 60));
    }

    let accuracy =
      this.state.userInput.trim().length &&
      Math.round(
        (this.state.symbols * 100) / this.state.userInput.trim().length,
      );

    return (
      <div>
        <Test wpm={wpm} sec={this.state.sec} accuracy={accuracy} />
        <Text
          texts={this.state.currentTexts}
          input={this.state.userInput}
          start={this.state.startNumber}
        />
        <input
          className={cls.main__input}
          ref={this.inputElement}
          value={this.state.userInput}
          onChange={this.onChangeInput}
        />
        <div className={cls.main__button__wrapper}>
          <button
            className={cls.main__button}
            onClick={this.state.isButton ? this.reStart : this.onStart}
          >
            <FontAwesomeIcon icon={this.state.isButton ? faRedo : faPlay} />
          </button>
        </div>

        <CustomModal
          isModal={this.state.modal}
          toggle={this.toggle}
          score={wpm}
          accuracy={accuracy}
        />
      </div>
    );
  }
}

export default Main1;
