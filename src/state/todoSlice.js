import { createSlice } from "@reduxjs/toolkit";
import thunkReducers from "./reducers";

const initialState = {
	todos: [],
	status: "idle",
	error: null,
	id: null,
	email: null,
	loggedIn: false,
};

const todoSlice = createSlice({
	name: "todo",
	initialState: initialState,
	reducers: {
		logout: (state, action) => {
			(state.email = null), (state.id = null), (state.loggedIn = false);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(thunkReducers.getAllTodo.pending, (state) => {
				state.status = "loading";
			})

			.addCase(thunkReducers.getAllTodo.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})

			.addCase(thunkReducers.getAllTodo.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.todos = action.payload.data;
			})

			.addCase(thunkReducers.newTodo.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.todos.push(action.payload.data);
			})

			.addCase(thunkReducers.updateTodo.fulfilled, (state, action) => {
				const uid = state.todos.findIndex(
					(todo) => todo._id == action.payload.data._id,
				);
				if (uid !== -1) {
					state.todos[uid] = action.payload.data;
				}
			})

			.addCase(thunkReducers.deleteTodo.fulfilled, (state, action) => {
				state.todos = state.todos.filter(
					(todo) => todo._id !== action.payload,
				);
			})

			.addCase(thunkReducers.toggleTodo.fulfilled, (state, action) => {
				const uid = state.todos.findIndex(
					(todo) => todo._id == action.payload.data._id,
				);
				if (uid !== -1) {
					state.todos[uid] = action.payload.data;
				}
			});

		builder
			.addCase(thunkReducers.login.fulfilled, (state, action) => {
				const data = action.payload.data;
				localStorage.setItem("token", data.token);
				state.email = data.userEmail;
				state.id = data.userId;
				state.loggedIn = true;
			})
			.addCase(thunkReducers.register.fulfilled, (state, action) => {
				const data = action.payload.data;
				window.location.href = data.url;
			});
	},
});

export const { logout } = todoSlice.actions;
export default todoSlice.reducer;
