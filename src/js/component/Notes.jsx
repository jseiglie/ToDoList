import React, { useState } from "react";
import "../../styles/Notes.css";
import NewTaskCreated from "./NewTaskCreated.jsx";

const Notes = () => {
	const [task, setTask] = useState("");
	const onChange = (e) => {
		setTask(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="container">
					<input
						className="form-control"
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
