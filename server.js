const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//dotenv configuration
dotenv.config();
//MongoDb Connection
connectDB();
//rest objectt
const app = express();

//middlewares
app.use(express.json()); // fix the json parse error in pass data inside the body
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
	res.status(200).send({
		message: "Server running...",
	});
});

// Define all User Router Here
app.use("/api/v1/user", require("./routes/userRouter"));

//listen port
const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(
		`Server running in ${process.env.NODE_MODE} Mode on port ${port}`.bgCyan
			.white
	);
});
