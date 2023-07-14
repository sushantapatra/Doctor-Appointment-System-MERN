import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import "../styles/RegisterStyles.css";

const Login = () => {
	//form Handler
	const onFinishHandler = (value) => {
		console.log(value);
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
