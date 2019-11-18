import React from 'react';

let RandomNumber = () => {
    const  rand = Math.ceil(Math.random()*100)
    return (
    //    <React.Fragment>
    //        {rand}
    //    </React.Fragment>
       <h1>
        Can you make {rand}?
       </h1>

    )
}

export default RandomNumber;