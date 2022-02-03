import React from "react";
import "../../styles/Notes.css";

const Notes = () => {
	return (
		<>
			<div className="container">
				<input type="text" placeholder="What needs to be done?" />
				<ul>{}</ul>
			</div>
		</>
	);
};

export default Notes;
