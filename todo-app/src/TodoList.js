import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        setTodos([...todos, {task: task}]);
    }

    const removeTodo = (todo) => {
        setTodos(todos.filter(t => t !== todo));
    }

    return (
        <div>
            <NewTodoForm addTodo={addTodo}/>

            {todos.map((todo) => (
                <Todo task={todo.task} remove={evt => removeTodo(todo)}/>
            ))}

        </div>
    )
}

export default TodoList;