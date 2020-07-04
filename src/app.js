import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Default from './components/Default.js'
import One from './components/One.js'
import Two from './components/Two.js'
import Three from './components/Three.js'
import Four from './components/Four.js'
import Five from './components/Five.js'
import Six from './components/Six.js'
import Seven from './components/Seven.js'
import Eight from './components/Eight.js'
import Nine from './components/Nine.js'
import Zero from './components/Zero.js'
import './css/style.scss';
const {useState, useEffect} = React

const App = (props) => {
    const [time, setTime] = useState('')

    setInterval(function(){setTime(moment().format('hh:mm:ss'))}, 1000)

    const checkTime = (num) =>{
        if(time.split('')[num] == '0'){
            return <Zero/>
        } else if (time.split('')[num] == '1'){
            return <One/>
        } else if (time.split('')[num] == '2'){
            return <Two/>
        } else if (time.split('')[num] == '3'){
            return <Three/>
        } else if (time.split('')[num] == '4'){
            return <Four/>
        } else if (time.split('')[num] == '5'){
            return <Five/>
        } else if (time.split('')[num] == '6'){
            return <Six/>
        }  else if (time.split('')[num] == '7'){
            return <Seven/>
        } else if (time.split('')[num] == '8'){
            return <Eight/>
        } else if (time.split('')[num] == '9'){
            return <Nine/>
        }
    }
    return (
        <div className="app">
            <Default/>
            <One/>
            <Two/>
            <Three/>
            <Four/>
            <Five/>
            <Six/>
            <Seven/>
            <Eight/>
            <Nine/>
            <Zero/>
            <div style={{color: "white"}}>{time}</div>
            <div style={{display: "flex"}}>
                <div>{checkTime(0)}</div>
                <div>{checkTime(1)}</div>
                <div style={{width: "calc(1vw)"}}>&nbsp;</div>
                <div>{checkTime(3)}</div>
                <div>{checkTime(4)}</div>
                <div style={{width: "calc(1vw)"}}>&nbsp;</div>
                <div>{checkTime(6)}</div>
                <div>{checkTime(7)}</div>
            </div>
        </div>
    );
};

const target = document.getElementById('app');
ReactDOM.render(<App />, target);