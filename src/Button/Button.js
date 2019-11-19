import React, {useState, Component} from 'react';
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

function Application(props) {
    // let randomNo = RandomNum();
    
    const plusOne = ()=> props.setCounter(props.counter+1);
    const plusThree = ()=> props.setCounter(props.counter+3);
    const timesTwo = ()=> props.setCounter(props.counter*2);
    const toZero = ()=> props.setCounter(props.counter-props.counter);
    const addTurns = ()=> props.setTurns(props.turns+1);

    const plusOneAndTurns = () => {
        plusOne();
        addTurns();
    }
    const plusThreeAndTurns = () => {
        plusThree();
        addTurns();
    }
    const timesTwoAndTurns = () => {
        timesTwo();
        addTurns();
    }
    const toZeroAndTurns = () => {
        toZero();
        addTurns();
    }

    
    
    return (
        
        <div>
           
            <Button label="+1" onClickFunc = {plusOneAndTurns}/>
            <Button label="+3" onClickFunc = {plusThreeAndTurns}/>
            <Button label="x2" onClickFunc = {timesTwoAndTurns}/>
            <Button label="Clear" onClickFunc = {toZeroAndTurns}/>


            <Display message = {props.counter}/>
        </div>
    );
}

// ReactDOM.render(
//     <Applic />,

//     document.getElementById('root'),
// );


//App

// class Application extends React.Component {
//     // let randomNo = RandomNum();
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {counter: 0 };
//     // }

//     state = {
//         counter: 0
//     }

//     // myFunc = () => {

//     // }


//     render(){
//         // const[counter, setCounter] = useState(0);


//         const plusOne = ()=> setCounter(counter+1);
//         const plusThree = ()=> setCounter(counter+3);
//         const timesTwo = ()=> setCounter(counter*2);
//         const toZero = ()=> setCounter(counter-counter);
//         // if (counter == )
        
//         return (
            
//             <div>
            
//                 <Button label="+1" onClickFunc = {plusOne}/>
//                 <Button label="+3" onClickFunc = {plusThree}/>
//                 <Button label="x2" onClickFunc = {timesTwo}/>
//                 <Button label="Clear" onClickFunc = {toZero}/>


//                 <Display message = {counter}/>
//             </div>
//         );
//     }
// }

export default Application;