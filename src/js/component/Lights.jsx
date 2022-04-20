import React, { useState, useEffect } from "react";
import Light from "./Light.jsx";

const Lights = () => {
	const [num1, setNum1] = useState(0);
	const [intervalId, setIntervalId] = useState(null);
	let color = "";

	useEffect(() => {
		setIntervalId(
			setInterval(() => {
				setNum1((num1) => num1 + 1);
			}, 1000)
		);

		return () => {
			clearInterval(intervalId);
		};
	}, []);
	if (num1 % 10 == 1 || num1 % 10 == 2 || num1 % 10 == 3 || num1 % 10 == 4) {
		color = "bg-danger rounded-circle  pt-5 pb-5";
	}
	if (num1 % 10 == 5 || num1 % 10 == 6 || num1 % 10 == 7) {
		color = "bg-success rounded-circle  pt-5 pb-5 ";
	}
	if (num1 % 10 == 8 || num1 % 10 == 9 || num1 % 10 == 0) {
		color = "bg-warning rounded-circle  pt-5 pb-5";
	}

	return (
		<div className="container bg-dark align-items-center m-0 ">
			<div className="colum align-items-center">
				<>
					<div className="col-8  pt-5 pb-5">
						<Light title={color} />
					</div>
					<div className="col-8  pt-5 pb-5">
						<Light title={color} />
					</div>

					<div className="col-8  pt-5 pb-5 ">
						<Light title={color} />
					</div>
				</>
			</div>
		</div>
	);
};
export default Lights;
