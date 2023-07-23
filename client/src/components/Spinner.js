import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import BeatLoader from "react-spinners/BeatLoader";

const Spinner = () => {
	return (
		<div className="d-flex justify-content-center spinner">
			<BeatLoader
				size={25}
				margin={10}
				color="red"
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

export default Spinner;
