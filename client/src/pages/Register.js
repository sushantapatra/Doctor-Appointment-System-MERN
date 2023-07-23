import React from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/RegisterStyles.css";
//add loader and redux toolkit for showing loader
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

const Register = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	//form Handler
	const onFinishHandler = async (values) => {
		try {
			dispatch(showLoading());
			const res = await axios.post("/api/v1/user/register", values);
			dispatch(hideLoading());
			if (res.data.success) {
				message.success("Register Successfully!");
				navigate("/login");
			} else {
				message.error(res.data.message);
			}
		} catch (error) {
			dispatch(hideLoading());
			console.log(` Registration Error :${error}`);
			message.error("Something went wrong.");
		}
	};
	return (
		<>
			<div className="form-container ">
				<Form
					layout="vertical"
					onFinish={onFinishHandler}
					className="register-form p-4"
				>
					<h3 className="text-center">Register Form</h3>
					<Form.Item label="Name" name="name">
						<Input
							type="text"
							rules={[
								{
									required: true,
									message: "Please input your name!",
								},
							]}
						/>
					</Form.Item>

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
						<Link to="/login" className="m-2">
							Already a user? login here
						</Link>
					</h6>
					<button className="btn btn-primary" type="submit">
						Register
					</button>
				</Form>
			</div>
		</>
	);
};

export default Register;
