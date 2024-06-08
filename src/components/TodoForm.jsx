import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import todoReducers from "../state/reducers";

const TodoForm = () => {

    const dispatch = useDispatch();
    const error = useSelector(state => state.todos.error);

    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(todoReducers.newTodo({ title, description:desc }))
        settitle("")
        setdesc("")
    }

    return (
        <div>
            <p>{error}</p>
            <form onSubmit={handleSubmit}>
                <div>title: <input type="text" value={title} onChange={e => settitle(e.target.value)} /></div><br />
                <div>description: <input type="text" value={desc} onChange={e => setdesc(e.target.value)} /></div><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default TodoForm