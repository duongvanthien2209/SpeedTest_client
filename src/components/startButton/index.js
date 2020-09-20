import React from 'react';
import { Button } from 'reactstrap';
import classNames from 'classnames';

const StartButton = ({ buttonDisable, onClick }) => {
    return (
        <div className={classNames("button-wrapper",{ 'start-button--disable': buttonDisable })}>
            <Button onClick={onClick} className="start-button">
                <span className="start-button__border"></span>
                <span className="start-button__background"></span>
                <span className="start-button__text">Go</span>
            </Button>
        </div>
    );
};

export default StartButton;