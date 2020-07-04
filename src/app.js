import React from 'react';
import ReactDOM from 'react-dom';
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
        </div>
    );
};

const target = document.getElementById('app');
ReactDOM.render(<App />, target);