import React, { useEffect } from "react";
import { message } from "antd";
import axios from "axios";
import Layout from "../components/Layout";

const HomePage = () => {
	//Login User Data
	// const getUserData = async () => {
	// 	try {
	// 		const user = await axios.post(
	// 			"/api/v1/user/getuser",
	// 			{},
	// 			{
	// 				headers: {
	// 					Authorization:
	// 						"Bearer " + localStorage.getItem("token"),
	// 				},
	// 			}
	// 		);
	// 	} catch (error) {
	// 		console.log(error);
	// 		message.error(error);
	// 	}
	// };
	// useEffect(() => {
	// 	getUserData();
	// }, []);

	return (
		<>
			<Layout>
				<h1>HomePage</h1>
			</Layout>
		</>
	);
};

export default HomePage;
