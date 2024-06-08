import axios from 'axios'
import React from 'react'

const TodoItem = ({ todoItem }) => {
    const handleDelete = (e) => {
        axios.delete(`http://localhost:5000/api/delete/${todoItem._id}`)
            .then(res=> {

            })
    }

    const handleToggle = (e) => {
        axios.get(`http://localhost:5000/api/toggle/${todoItem._id}`)
            .then(res=> {

            })
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