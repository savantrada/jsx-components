import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    const buttonText = {text: 'click me'};
    return <div>
        <label className="label" htmlFor="name">Enter Name:</label>
        <input id="name" type="text"></input>
        <button style = {{backgroundColor: 'red', color:'white'}}>{buttonText.text}</button>
    </div>;
}
ReactDOM.render(<App/>,document.querySelector('#root'));

const Components = () => {
return (
    <div className="ui container comments">
        <CommentDetail />
        <CommentDetail />
    </div>
);
}
ReactDOM.render(<Components/>,document.querySelector('#components'));
