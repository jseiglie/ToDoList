import React from "react";
import Notes from "../component/Notes.jsx";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<>
			<div className="container">
				<h1>ToDoS</h1>

				<div className="container">
					<div className="row">
						<Notes></Notes>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
