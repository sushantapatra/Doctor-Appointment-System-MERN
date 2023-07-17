const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const loginController = async (req, res) => {
	try {
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: `Login Controller Error : ${error}`,
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
			message: `Register Controller Error : ${error}`,
		});
	}
};

module.exports = { loginController, registerController };
