import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    return (
        <div className="app__footer">
            <div className="app__footer--credit">Code by Bryce Belock</div>
            <div className="app__footer--links">
            <a href="https://belock.dev" target="_blank" rel="noopener noreferrer"><i className="fas fa-globe"></i></a>
            <a href="https://github.com/Clobek?tab=repositories" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
            <a href="https://www.linkedin.com/in/bryce-belock/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://medium.com/@belock" target="_blank" rel="noopener noreferrer"><i className="fab fa-medium"></i></a>
            </div>
        </div>
    );
};