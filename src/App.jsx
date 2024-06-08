import { useEffect } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { useSelector, useDispatch } from 'react-redux';
import todoReducers from "./state/reducers";



function App() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);
    const status = useSelector(state => state.todos.status);
    const error = useSelector(state => state.todos.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(todoReducers.getAllTodo());
        }
    }, [status, dispatch]);

    return (
        <main>
            {
                error ? <p>{error.message}</p> : <></>
            }
            <TodoForm />
            <TodoList todoList={todos} />
        </main>
    )
}

export default App
