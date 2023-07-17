const loginController = (req, res) => {
	console.log("Login Controller");
	res.status(200).send({
		message: "Login Controller...",
	});
};

const registerController = () => {
	console.log("Login Controller");
};

module.exports = { loginController, registerController };
