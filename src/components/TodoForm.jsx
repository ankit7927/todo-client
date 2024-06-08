import axios from 'axios';
import React, { useState } from 'react'

const TodoForm = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        axios.post("http://localhost:5000/api/new", { title, description:desc })
            .then(res => {
                // append this new todo in list
                setLoading(false)
            }).catch(err => {
                setLoading(false)
                setError(err.response.data.message)
            })

    }

    return (
        <div>
            <p>{error}</p>
            <form onSubmit={handleSubmit}>
                <div>title: <input type="text" value={title} onChange={e => settitle(e.target.value)} /></div><br />
                <div>description: <input type="text" value={desc} onChange={e => setdesc(e.target.value)} /></div><br />
                {
                    loading ? <p>loading</p> : <input type="submit" value="submit" />
                }
            </form>
        </div>
    )
}

export default TodoForm