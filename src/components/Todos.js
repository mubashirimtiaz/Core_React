import React from 'react';
import Todo from './Todo'
import './Todos.css';

const Todos = () => {
    const style = {
        maxWidth:"500px",
        margin: "20px auto",
        border:"1px solid #333",
        padding:"10px",
        backgroundColor : "orange"
    }
    return (
        <div className="parentContainer" style={style}>
            <h1 className="heading">Todos</h1>
           <Todo text="Dancing"/>
           <Todo text="Walking"/>
           <Todo text="Talking"/>
           <Todo text="Singing"/>
        </div>
    )
}
export default Todos;