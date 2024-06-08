import React from 'react'
import { useDispatch } from 'react-redux';
import todoReducers from "../state/reducers";

const TodoItem = ({ todoItem }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(todoReducers.deleteTodo(todoItem._id))
    }

    const handleToggle = () => {
        dispatch(todoReducers.toggleTodo(todoItem._id))
    }

    return (
        <div class={ todoItem.completed ? "todo-item completed" : "todo-item" }>
            <div class="task">
                <h2>{todoItem.title}</h2>
                <p>{todoItem.description}</p>
            </div>
            <div class="buttons">
                {
                    todoItem.completed ? <></> :  <button class="complete" onClick={handleToggle}>Complete</button>
                }
                <button class="delete" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem