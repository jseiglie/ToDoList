import React, { useState } from "react";
import "../../styles/Notes.css";
import NewTaskCreated from "./NewTaskCreated.jsx";

const myList = {
	label: "",
	done: false,
};

const Notes = () => {
	const [task, setTask] = useState("");
	const onChange = (e) => {
		setTask(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		document.querySelector(".myInput").value = "";
		// setTask("");
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="container">
					<input
						className="form-control myInput"
						value={task}
						onChange={onChange}
						type="text"
					/>
					<ul className="list-group">
						<NewTaskCreated taskText={task}></NewTaskCreated>
					</ul>
				</div>
			</form>
		</>
	);
};

export default Notes;
