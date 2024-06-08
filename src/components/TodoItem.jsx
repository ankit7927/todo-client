import axios from 'axios'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
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
        <div>
            {
                todoItem.completed ? <del><h5>{todoItem.title}</h5></del> : <h4>{todoItem.title}</h4>
            }
            
            <p>{todoItem.description}</p>
            <br />

            {
                todoItem.completed ? <></> : <button onClick={handleToggle}>complete</button>
            }

            <button onClick={handleDelete}>delete</button>
        </div>
    )
}

export default TodoItem