import React, { useEffect } from "react";
import { message } from "antd";
import axios from "axios";

const HomePage = () => {
	//Login User Data
	const getUserData = async () => {
		try {
			const user = await axios.post(
				"/api/v1/user/getuser",
				{},
				{
					headers: {
						Authorization:
							"Bearer " + localStorage.getItem("token"),
					},
				}
			);
			console.log(user);
		} catch (error) {
			console.log(error);
			message.error(error);
		}
	};
	useEffect(() => {
		getUserData();
	}, []);

	return (
		<>
			<h1>HomePage</h1>
		</>
	);
};

export default HomePage;
