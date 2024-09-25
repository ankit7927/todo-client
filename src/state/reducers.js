import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");

const newAxios = axios.create({
	baseURL: "http://localhost:5000/api",
	headers: {
		Authorization: token,
	},
});

const thunkReducers = {};

thunkReducers.getAllTodo = createAsyncThunk("todos/fetchTodo", async () => {
	return await newAxios.get("http://localhost:5000/api/todo/getall");
});

thunkReducers.newTodo = createAsyncThunk("todos/newTodo", async (data) => {
	return await newAxios.post("http://localhost:5000/api/todo/new", data);
});

thunkReducers.updateTodo = createAsyncThunk(
	"todos/updateTodo",
	async (data) => {
		return await newAxios.put(
			"http://localhost:5000/api/todo/update",
			data,
		);
	},
);

thunkReducers.deleteTodo = createAsyncThunk(
	"todos/deleteTodo",
	async (todoId) => {
		await newAxios.delete(
			"http://localhost:5000/api/todo/delete/" + todoId,
		);
		return todoId;
	},
);

thunkReducers.toggleTodo = createAsyncThunk(
	"todos/toggleTodo",
	async (todoId) => {
		return await newAxios.get(
			"http://localhost:5000/api/todo/toggle/" + todoId,
		);
	},
);

thunkReducers.login = createAsyncThunk("user/login", async (data) => {
	return await axios.post("http://localhost:5000/api/auth/login", data);
});

thunkReducers.register = createAsyncThunk("user/register", async (data) => {
	return await axios.post("http://localhost:5000/api/auth/register", data);
});

export default thunkReducers;
