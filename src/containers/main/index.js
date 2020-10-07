import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

import { StartButton, Test, CustomModal } from '../../components';

import textApi from '../../apis/textApi';

const initialState = {
  text: '',
  userInput: '',
  symbols: 0,
  sec: 0,
  started: false,
  finished: false,
  buttonDisable: false,
  isModal: false
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.inputElement = React.createRef();
    this.state = initialState;
    this.onRestart = this.onRestart.bind(this);
    this.onChangeUserInput = this.onChangeUserInput.bind(this);
    this.setTimer = this.setTimer.bind(this);
    this.onFinish = this.onFinish.bind(this);
    this.onClickStart = this.onClickStart.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    textApi
      .getRandomText()
      .then(res => {
        let {
          status,
          data: { text }
        } = res;

        if (status !== 'success' || !text) {
          throw new Error('Có lỗi xảy ra');
        }

        this.setState(currentState => ({
          ...currentState,
          text
        }));
      })
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  }

  onRestart() {
    this.setState(initialState);

    textApi
      .getRandomText()
      .then(res => {
        // debugger;
        let {
          status,
          data: { text }
        } = res;

        if (status !== 'success' || !text) {
          throw new Error('Có lỗi xảy ra');
        }

        this.setState(currentState => ({
          ...currentState,
          text
        }));
      })
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  }

  onChangeUserInput(evt) {
    let value = evt.target.value;
    this.setTimer();
    this.onFinish(value);
    this.setState({
      userInput: value,
      symbols: this.countCorrectSymbols(value)
    });
  }

  countCorrectSymbols(userInput) {
    const text = this.state.text.replace(' ', '');
    return userInput
      .replace(' ', '')
      .split('')
      .filter((s, i) => s === text[i]).length;
  }

  setTimer() {
    if (!this.state.started) {
      this.setState({
        started: true
      });
      this.interval = setInterval(() => {
        this.setState(prevProps => {
          return {
            sec: prevProps.sec + 1
          };
        });
      }, 1000);
    }
  }

  onFinish(userInput) {
    if (userInput.length === this.state.text.length) {
      clearInterval(this.interval);
      this.setState({
        finished: true,
        isModal: true
      });
    }
  }

  onClickStart() {
    this.setState({
      buttonDisable: true
    });
    this.setTimer();
    this.inputElement.current.focus();
  }

  toggle() {
    this.setState({
      isModal: !this.state.isModal
    });
  }

  render() {
    let wpm = 0;

    if (this.state.symbols !== 0 && this.state.sec !== 0) {
      wpm = Math.round(this.state.symbols / 5 / (this.state.sec / 60));
    }

    return (
      <Container>
        <Row>
          <Col className="col-md-6 offset-md-3 d-flex align-items-center">
            <div className="wrapper">
              <StartButton
                buttonDisable={this.state.buttonDisable}
                onClick={this.onClickStart}
              />

              <Test
                buttonDisable={this.state.buttonDisable}
                text={this.state.text}
                userInput={this.state.userInput}
                wpm={wpm}
                onRestart={this.onRestart}
              />
              <input
                style={{ opacity: 0, 'z-index': -2 }}
                ref={this.inputElement}
                type="text"
                value={this.state.userInput}
                onChange={this.onChangeUserInput}
                readOnly={this.state.finished}
              />

              <CustomModal
                isModal={this.state.isModal}
                toggle={this.toggle}
                score={wpm}
              />
              {/* <button onClick={this.toggle}>Modal</button> */}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
