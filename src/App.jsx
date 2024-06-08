import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import axios from "axios"

function App() {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})

    useEffect(() => {
        setLoading(true)
        axios.get("http://localhost:5000/api/getall")
            .then(res => {
                setTodos(res.data)
                setLoading(false)
            }).catch(err => {
                setError(err)
                setLoading(false)
            })
    }, [])

    return (
        <main>
            {
                error ? <p>{error.message}</p> : <></>
            }
            <TodoForm />
            {
                loading ? <p>loading</p> : <TodoList todoList={todos} />
            }
        </main>
    )
}

export default App
