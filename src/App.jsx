import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoScreen from "./screens/TodoScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Navbar from "./components/Navbar";

function App() {
	const router = createBrowserRouter([
		{
			path: "",
			element: <TodoScreen />,
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/register",
			element: <Register />,
		},
	]);

	return (
		<div>
			<Navbar />
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
