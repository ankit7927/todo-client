import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import todoReducers from "../state/reducers";

const TodoForm = () => {

    const dispatch = useDispatch();

    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(todoReducers.newTodo({ title, description: desc }))
        settitle("")
        setdesc("")
    }

    return (
        <div className="input-container">
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" placeholder="Name" value={title} onChange={e => settitle(e.target.value)} />
                <input type="text" id="description" placeholder="Description" value={desc} onChange={e => setdesc(e.target.value)} />
                <button id="addTodo">Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm