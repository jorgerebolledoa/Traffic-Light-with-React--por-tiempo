import React from "react";
import PropTypes from "prop-types";

function Light(props) {
	return (
		<div className=" bg-success rounded-circle  ">
			<div className={props.title}>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
			</div>
		</div>
	);
}
Light.prototypeaa = {
	title: PropTypes.number,
};

export default Light;
