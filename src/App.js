import React from 'react';
import './App.css';
import Application from './Button/Button';
import RandomNum from './randomNum';
import Checker from './Checker'

function App() {
  return (
    <div className="App">
      <RandomNum />
      <Application />
    </div>
  );

  // const domContainer = document.querySelector('#mountNode');
  // ReactDOM.render(e(app), domContainer);
}


export default App;
