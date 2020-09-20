import React from 'react';

import { Container, Row, Col, Input, Button } from 'reactstrap';

import { Preview, Speed, getText } from '../../components';

const Example = () => {
    return (
        <Container className="mb-5">
            <Row>
                <Col className="col-md-6 offset-md-3">
                    <Preview text={this.state.text} userInput={this.state.userInput} />

                    <Input
                        type="textarea"
                        className="mb-3"
                        value={this.state.userInput}
                        onChange={this.onChangeUserInput}
                        placeholder="Start typing..."
                        readOnly={this.state.finished}
                    />

                    <Speed symbols={this.state.symbols} sec={this.state.sec} />

                    <div className="text-right">
                        <Button color="light" onClick={this.onRestart}>Restart</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Example;