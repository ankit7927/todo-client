import { createSlice } from "@reduxjs/toolkit";
import todoReducers from "./reducers";

const initialState = {
    todos: [],
    status: 'idle',
    error: null,
}

const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(todoReducers.getAllTodo.pending, (state) => {
                state.status = 'loading'
            })

            .addCase(todoReducers.getAllTodo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;

            })

            .addCase(todoReducers.getAllTodo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.todos = action.payload.data;
            })
    }
})

export default todoSlice.reducer;