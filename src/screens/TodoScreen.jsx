import React, { useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useSelector, useDispatch } from "react-redux";
import todoReducers from "../state/reducers";
import { useNavigate } from "react-router-dom";

const TodoScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const loggedIn = useSelector((state) => state.todos.loggedIn);
	const todos = useSelector((state) => state.todos.todos);
	const status = useSelector((state) => state.todos.status);

	useEffect(() => {
		if (!loggedIn) navigate("/login");
		if (status === "idle") {
			dispatch(todoReducers.getAllTodo());
		}
	}, [status, loggedIn]);

	return (
		<div>
			<TodoForm />
			<TodoList todoList={todos} />
		</div>
	);
};

export default TodoScreen;
