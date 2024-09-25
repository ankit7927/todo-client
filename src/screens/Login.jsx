import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import thunkReducers from "../state/reducers";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const loggedIn = useSelector((state) => state.todos.loggedIn);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		if (loggedIn) navigate("/");
	}, [loggedIn]);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(thunkReducers.login({ email, password }));
	};

	return (
		<div class="container">
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					name="email"
					placeholder="Email"
					required
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					required
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
