import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../state/todoSlice";
import axios from "axios";

const Navbar = () => {
	const dispatch = useDispatch();
	const loggedIn = useSelector((state) => state.todos.loggedIn);
	const userEmail = useSelector((state) => state.todos.email);
	const [loading, setLoading] = useState(false);

	const logoutClicked = (e) => {
		e.preventDefault();
		dispatch(logout());
	};

	const onSubscriptionClicked = (e) => {
		e.preventDefault();
		setLoading(true);
		axios
			.get(
				`http://localhost:5000/api/payment/subscription-details/${userEmail}`,
			)
			.then((res) => {
				if (res.status == 200) {
					window.location.href = res.data.url;
					setLoading(true);
				}
			})
			.catch((err) => {
				console.log(err);
				setLoading(true);
			});
	};
	return (
		<div class="navbar">
			<div class="logo">
				<a href="/">My Todos</a>
			</div>
			{loggedIn ? (
				<div class="links">
					{loading ? (
						<a> getting details</a>
					) : (
						<a onClick={onSubscriptionClicked}>Subscription</a>
					)}

					<a onClick={logoutClicked}>Logout</a>
				</div>
			) : (
				<div class="links">
					<a href="/login">Login</a>
					<a href="/register">Register</a>
				</div>
			)}
		</div>
	);
};

export default Navbar;
