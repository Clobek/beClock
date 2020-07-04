import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Header from './components/Header.js'
import Default from './components/Default.js'
import One from './components/One.js'
import Test from './components/One.js'
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

    setInterval(function(){setTime(moment().format('HH:mm:ss'))}, 1000)

    const checkTime = (num) =>{
        if(time.split('')[num] == '0'){
            return <Zero/>
        } else if (time.split('')[num] == '1'){
            return <Test/>
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
            <Header/>
            <div className="app__clock">
                <div className="app__clock-one">{checkTime(0)}</div>
                <div className="app__clock-space">&nbsp;</div>
                <div className="app__clock-two">{checkTime(1)}</div>
                <div className="app__clock-bigSpace">&nbsp;</div>
                <div className="app__clock-three">{checkTime(3)}</div>
                <div className="app__clock-space">&nbsp;</div>
                <div className="app__clock-four">{checkTime(4)}</div>
                <div className="app__clock-bigSpace">&nbsp;</div>
                <div className="app__clock-five">{checkTime(6)}</div>
                <div className="app__clock-space">&nbsp;</div>
                <div className="app__clock-six">{checkTime(7)}</div>
            </div>
        </div>
    );
};

const target = document.getElementById('app');
ReactDOM.render(<App />, target);