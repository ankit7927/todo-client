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

            .addCase(todoReducers.newTodo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.todos.push(action.payload.data)
            })

            .addCase(todoReducers.updateTodo.fulfilled, (state, action) => {
                const uid = state.todos.findIndex(todo => todo._id == action.payload.data._id)
                if (uid !== -1) {
                    state.todos[uid] = action.payload.data;
                }
            })

            .addCase(todoReducers.deleteTodo.fulfilled, (state, action) => {
                state.todos = state.todos.filter(todo => todo._id !== action.payload)
            })

            .addCase(todoReducers.toggleTodo.fulfilled, (state, action) => {
                const uid = state.todos.findIndex(todo => todo._id == action.payload.data._id)
                if (uid !== -1) {
                    state.todos[uid] = action.payload.data;
                }
            })
    }
})

export default todoSlice.reducer;