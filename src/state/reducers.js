import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const todoReducers = {}

todoReducers.getAllTodo = createAsyncThunk("todos/fetchTodo", async () => {
    return (await axios.get("http://localhost:5000/api/getall"));
});

todoReducers.newTodo = createAsyncThunk("todos/newTodo", async (data) => {
    return await axios.post("", data, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
});

todoReducers.updateTodo = createAsyncThunk("todos/updateTodo", async (data) => {
    return await axios.put("", data)
});

todoReducers.deleteTodo = createAsyncThunk("todos/deleteTodo", async (data) => {
    return await axios.delete("")
});

todoReducers.toggleTodo = createAsyncThunk("todos/toggleTodo", async (data) => {
    return await axios.get("")
});


export default todoReducers