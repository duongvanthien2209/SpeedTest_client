import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import cls from './style.module.scss';

const Test = ({ wpm, sec, accuracy }) => {
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
              <p>{accuracy}</p>
              <span>% TỶ LỆ</span>
            </div>
            <div className={cls.wrapper__sec}>
              <p>{sec}</p>
              <span>GIÂY</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Test;
