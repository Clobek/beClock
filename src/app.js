import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js'
import Default from './components/Default.js'
import One from './components/One.js'
import './css/style.scss';
const {useState, useEffect} = React

const App = (props) => {
    return (
        <div className="app">
            <Default/>
            <One/>
            
        </div>
    );
};

const target = document.getElementById('app');
ReactDOM.render(<App />, target);