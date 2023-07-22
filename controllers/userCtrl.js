const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const loginController = async (req, res) => {
	try {
		const user = await userModel.findOne({ email: req.body.email });
		if (!user) {
			return res.status(200).send({
				success: false,
				message: "User not found",
			});
		}
		const isMatch = await bcrypt.compare(req.body.password, user.password);
		if (!isMatch) {
			return res.status(200).send({
				success: false,
				message: "Invalid Email or Password",
			});
		}
		//Generate JWT Token
		const token = jwt.sign({ id: user.__id }, process.env.JWT_SECRET, {
			expiresIn: "1d",
		});
		return res.status(200).send({
			success: true,
			message: "Login Success",
			token,
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: `Login Controller Error : ${error.message}`,
		});
	}
};

const registerController = async (req, res) => {
	try {
		const existingUser = await userModel.findOne({ email: req.body.email });
		if (existingUser) {
			return res.status(200).send({
				success: false,
				message: "User Already Exist.",
			});
		}
		//pasword hasing using bcrypt
		const password = req.body.password;
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		req.body.password = hashedPassword;

		const newUser = new userModel(req.body);
		await newUser.save();
		return res.status(201).send({
			success: true,
			message: `Registeration Successfully.`,
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: `Register Controller Error : ${error.message}`,
		});
	}
};

module.exports = { loginController, registerController };
