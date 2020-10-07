import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import cls from './style.module.scss';

const Test = ({ symbols, sec, textLength }) => {
  let wpm = 0;

  if (symbols !== 0 && 120 - sec !== 0) {
    console.log(symbols, sec);
    wpm = Math.round(symbols / 5 / ((120 - sec) / 60));
  }

  // console.log(symbols, textLength);

  return (
    <Container>
      <Row>
        <Col md="6" className="offset-md-3">
          <div className={cls.wrapper}>
            <div className={cls.wrapper__wpm}>
              <p>{wpm}</p>
              <span>WPM</span>
            </div>
            <div className={cls.wrapper__accuracy}>
              <p>{textLength && Math.round(symbols*100/textLength)}</p>
              <span>% ACCURACY</span>
            </div>
            <div className={cls.wrapper__sec}>
              <p>{sec}</p>
              <span>SEC</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Test;
