import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const todoReducers = {}

todoReducers.getAllTodo = createAsyncThunk("todos/fetchTodo", async () => {
    return (await axios.get("http://localhost:5000/api/getall"));
});

todoReducers.newTodo = createAsyncThunk("todos/newTodo", async (data) => {
    return await axios.post("http://localhost:5000/api/new", data)
});

todoReducers.updateTodo = createAsyncThunk("todos/updateTodo", async (data) => {
    return await axios.put("http://localhost:5000/api/update", data)
});

todoReducers.deleteTodo = createAsyncThunk("todos/deleteTodo", async (todoId) => {
    await axios.delete("http://localhost:5000/api/delete/"+todoId)
    return todoId
});

todoReducers.toggleTodo = createAsyncThunk("todos/toggleTodo", async (todoId) => {
    return await axios.get("http://localhost:5000/api/toggle/"+todoId)
});


export default todoReducers