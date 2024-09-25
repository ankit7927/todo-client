import React, { useState } from "react";
import { useDispatch } from "react-redux";
import thunkReducers from "../state/reducers";

const Register = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(thunkReducers.register({ name, email, password }));
	};

	return (
		<div class="container">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Name"
					required
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
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
				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default Register;
