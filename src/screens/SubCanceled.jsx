import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SubCanceled = () => {
	const navigate = useNavigate();
	const params = useParams();
	const userId = params.userId;
	useEffect(() => {
		axios.delete(
			`http://localhost:5000/api/payment/subscription-cancled/${userId}`,
		);
		navigate("/login");
	}, []);
	return <div>SubCanceled</div>;
};

export default SubCanceled;
