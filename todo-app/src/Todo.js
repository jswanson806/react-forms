import React from "react";
import './Todo.css';

function Todo({task, remove}){
    return(
        <div className="Todo">
            <button className="Todo-btn" onClick={remove}>X</button>
            <li role="Task">{task}</li>
        </div>
    )
}

export default Todo;