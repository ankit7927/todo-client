import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoScreen from "./screens/TodoScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Navbar from "./components/Navbar";
import SubCanceled from "./screens/SubCanceled";

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
		{
			path: "/sub-cancel/:userId",
			element: <SubCanceled />,
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
