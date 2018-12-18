import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttonText = {text: 'click me'};
    return <div>
        <label className="label" for="name">Enter Name:</label>
        <input id="name" type="text"></input>
        <button style = {{backgroundColor: 'red', color:'white'}}>{buttonText.text}</button>
    </div>;
}

ReactDOM.render(<App/>,document.querySelector('#root'));