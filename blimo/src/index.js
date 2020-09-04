import React from 'react'
import ReactDOM from 'react-dom';
import App from './App' 


//ReactDOM.render(<h1>This is react</h1>,document.getElementById("root"))

/*JSX is advanced html you cant have html tags side by side but must wrap them in a div
ReactDOM.render(<div>
    <h1>This is react</h1>
    <p>this is a p tag</p>
    </div>,document.getElementById("root"))
    */

    //Creating Components
    ReactDOM.render(<App />, document.getElementById("root"))