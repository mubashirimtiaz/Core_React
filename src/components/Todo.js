import React from 'react';
import './Todo.css';

const Todo = (props) => {
    console.log(props);
    return(
        <div className="container">
            <input type="checkbox" />
            <p>{props.text}</p>
        </div>
    )
}


export default Todo;