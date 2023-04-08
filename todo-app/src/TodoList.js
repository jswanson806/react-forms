import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        setTodos([...todos, {id: uuid(), task: task}]);
    }

    const removeTodo = (todo) => {
        setTodos(todos.filter(t => t !== todo));
    }

    return (
        <div>
            <NewTodoForm addTodo={addTodo}/>

            {todos.map((todo) => (
                <Todo id={todo.id} task={todo.task} remove={evt => removeTodo(todo)} key={todo.id}/>
            ))}

        </div>
    )
}

export default TodoList;