import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");

const newAxios = axios.create({
	baseURL: "http://65.2.131.195:5000/api",
	headers: {
		Authorization: token,
	},
});

const thunkReducers = {};

thunkReducers.getAllTodo = createAsyncThunk("todos/fetchTodo", async () => {
	return await newAxios.get("/todo/getall");
});

thunkReducers.newTodo = createAsyncThunk("todos/newTodo", async (data) => {
	return await newAxios.post("/todo/new", data);
});

thunkReducers.updateTodo = createAsyncThunk(
	"todos/updateTodo",
	async (data) => {
		return await newAxios.put(
			"/todo/update",
			data,
		);
	},
);

thunkReducers.deleteTodo = createAsyncThunk(
	"todos/deleteTodo",
	async (todoId) => {
		await newAxios.delete(
			"/todo/delete/" + todoId,
		);
		return todoId;
	},
);

thunkReducers.toggleTodo = createAsyncThunk(
	"todos/toggleTodo",
	async (todoId) => {
		return await newAxios.get(
			"/todo/toggle/" + todoId,
		);
	},
);

thunkReducers.login = createAsyncThunk("user/login", async (data) => {
	return await axios.post("http://65.2.131.195:5000/api/auth/login", data);
});

thunkReducers.register = createAsyncThunk("user/register", async (data) => {
	return await axios.post("http://65.2.131.195:5000/api/auth/register", data);
});

export default thunkReducers;
