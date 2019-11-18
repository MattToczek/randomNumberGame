import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Display from './Display'
// import RandomNum from '../randomNum';

function Button(props) {
    
    
    // const plusOne = ()=> setCounter(counter+1);
    // const plusThree = ()=> setCounter(counter+3);
    // const timesTwo = ()=> setCounter(counter*2);
    // const reset = ()=> setCounter(counter-counter);

    return (

        <button id= "+1" onClick = {props.onClickFunc}>            
            {props.label}
        </button>
    );
}



//App

function Application() {
    // let randomNo = RandomNum();
    const[counter, setCounter] = useState(0);
    const plusOne = ()=> setCounter(counter+1);
    const plusThree = ()=> setCounter(counter+3);
    const timesTwo = ()=> setCounter(counter*2);
    const toZero = ()=> setCounter(counter-counter);
    return (
        
        <div>
           
            <Button label="+1" onClickFunc = {plusOne}/>
            <Button label="+3" onClickFunc = {plusThree}/>
            <Button label="x2" onClickFunc = {timesTwo}/>
            <Button label="Clear" onClickFunc = {toZero}/>


            <Display message = {counter}/>
        </div>
    );
}

// ReactDOM.render(
//     <Applic />,

//     document.getElementById('root'),
// );

export default Application;