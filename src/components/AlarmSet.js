import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    return (
        <div className="app__alarm--set">
            <div className="app__alarm--set--title">Step 2. Choose when to wake up</div>
            <div className="app__alarm--set--body">
                <div className="app__alarm--set--body--raise">
                    <div className="app__alarm--set--body--raise1"><i className="fas fa-chevron-circle-up" onClick={()=>{props.raiseHourTens(props.alarm.hourTens)}}></i></div>
                    <div className="app__alarm--set--body--raise2"><i className="fas fa-chevron-circle-up" onClick={()=>{props.raiseHourOnes(props.alarm.hourOnes, props.alarm.hourTens)}}></i></div>
                    <div className="app__alarm--set--body--raise--space"></div>
                    <div className="app__alarm--set--body--raise3"><i className="fas fa-chevron-circle-up" onClick={()=>{props.raiseMinuteTens(props.alarm.minuteTens)}}></i></div>
                    <div className="app__alarm--set--body--raise4"><i className="fas fa-chevron-circle-up" onClick={()=>{props.raiseMinuteOnes(props.alarm.minuteOnes)}}></i></div>
                </div>
                <div className="app__alarm--set--body--clock">
                    <div className="app__alarm--set--body--clock1">
                        {props.alarmTime(props.alarm.hourTens)}
                    </div>
                    <div className="app__alarm--set--body--clock2">
                        {props.alarmTime(props.alarm.hourOnes)}
                    </div>
                    <div className="app__alarm--set--body--clock--space"></div>               
                    <div className="app__alarm--set--body--clock3">
                        {props.alarmTime(props.alarm.minuteTens)}
                    </div>
                    <div className="app__alarm--set--body--clock4">
                        {props.alarmTime(props.alarm.minuteOnes)}
                    </div>
                </div>
                <div className="app__alarm--set--body--lower">
                    <div className="app__alarm--set--body--lower1"><i className="fas fa-chevron-circle-down" onClick={()=>{props.lowerHourTens(props.alarm.hourTens)}}></i></div>
                    <div className="app__alarm--set--body--lower2"><i className="fas fa-chevron-circle-down" onClick={()=>{props.lowerHourOnes(props.alarm.hourOnes, props.alarm.hourTens)}}></i></div>
                    <div className="app__alarm--set--body--lower--space"></div>
                    <div className="app__alarm--set--body--lower3"><i className="fas fa-chevron-circle-down" onClick={()=>{props.lowerMinuteTens(props.alarm.minuteTens)}}></i></div>
                    <div className="app__alarm--set--body--lower4"><i className="fas fa-chevron-circle-down" onClick={()=>{props.lowerMinuteOnes(props.alarm.minuteOnes)}}></i></div>
                </div>
                <div className="app__alarm--set--body--button"></div>
            </div>
        </div>
    );
};