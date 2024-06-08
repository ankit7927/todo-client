import { useEffect } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { useSelector, useDispatch } from 'react-redux';
import todoReducers from "./state/reducers";

function App() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);
    const status = useSelector(state => state.todos.status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(todoReducers.getAllTodo());
        }
    }, [status, dispatch]);

    return (
        <div >
            <h1>My Todos</h1>
            <TodoForm/>
            <TodoList todoList={todos} />
        </div>
    )
}

export default App
