import React from "react";
import * as PropTypes from "prop-types";

const NewTaskCreated = (props) => {
	return (
		<>
			<li className="list-group-item">{props.taskText}</li>
		</>
	);
};

NewTaskCreated.propTypes = {
	taskText: PropTypes.string,
};

export default NewTaskCreated;
