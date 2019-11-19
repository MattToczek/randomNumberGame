import React, {useState} from 'react';
import './App.css';
import Application from './Button/Button';


function App() {

const[counter, setCounter] = useState(0);
const[rNumb, setRnumb] = useState(0);
const[turns, setTurns] = useState(0);


const getRandNumber = () => {
  let a = Math.ceil(Math.random()*100);
  setRnumb(a);
}

   
  return (
    <div className="App">
      <a href="#" onClick={getRandNumber}>Get Rand Number</a>
      <h1>{rNumb ? `Can you make ${rNumb}` : "Please click the button"}</h1>
      
      <Application setTurns={setTurns} turns= {turns} counter={counter} setCounter={setCounter}/>
      <p>My randstate number is {rNumb}</p>
      <h2>{( counter == rNumb && rNumb !==0) ? `You win, it took you ${turns} turns!` : "Try again"}</h2>
    </div>
  );

  // const domContainer = document.querySelector('#mountNode');
  // ReactDOM.render(e(app), domContainer);
}


export default App;
