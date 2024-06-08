import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todoList }) => {
    return (
        <div className="todo-list">
            {
                todoList.map(todo => {
                    return (
                        <TodoItem todoItem={todo} key={todo._id}/>
                    )
                })
            }
        </div>
    )
}

export default TodoList