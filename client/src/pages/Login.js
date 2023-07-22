import React from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../styles/RegisterStyles.css";
import axios from "axios";

const Login = () => {
	const navigate = useNavigate();
	//form Handler
	const onFinishHandler = async (values) => {
		try {
			const res = await axios.post("/api/v1/user/login", values);
			if (res.data.success) {
				localStorage.setItem("token", res.data.token);
				message.success("Login Successfully");
				navigate("/");
			} else {
				message.error(res.data.message);
			}
		} catch (error) {
			console.log(`Error : ${error}`);
			message.error("Something went wrong");
		}
	};
	return (
		<>
			<div className="form-container ">
				<Form
					layout="vertical"
					onFinish={onFinishHandler}
					className="login-form p-4"
				>
					<h3 className="text-center">Login Form</h3>

					<Form.Item label="Email" name="email">
						<Input
							type="email"
							rules={[
								{
									required: true,
									message: "Please input your email!",
								},
							]}
						/>
					</Form.Item>

					<Form.Item label="Password" name="password">
						<Input
							type="password"
							rules={[
								{
									required: true,
									message: "Please input your password!",
								},
							]}
						/>
					</Form.Item>
					<h6>
						<Link to="/register" className="m-2">
							Not a user? register here
						</Link>
					</h6>
					<button className="btn btn-primary" type="submit">
						Login
					</button>
				</Form>
			</div>
		</>
	);
};

export default Login;
