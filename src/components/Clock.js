import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    return (
        <div className="app__clock">
                <div className="app__clock-one">{props.checkTime(0)}</div>
                <div className="app__clock-space">&nbsp;</div>
                <div className="app__clock-two">{props.checkTime(1)}</div>
                <div className="app__clock-bigSpace">&nbsp;</div>
                <div className="app__clock-three">{props.checkTime(3)}</div>
                <div className="app__clock-space">&nbsp;</div>
                <div className="app__clock-four">{props.checkTime(4)}</div>
                <div className="app__clock-bigSpace">&nbsp;</div>
                <div className="app__clock-five">{props.checkTime(6)}</div>
                <div className="app__clock-space">&nbsp;</div>
                <div className="app__clock-six">{props.checkTime(7)}</div>
        </div>
    );
};