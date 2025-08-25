import React from "react";

//include images into your bundle
import NavBar from "./NavBar";

//create your first component
const Home = () => {
	return (
		<div className="text-center" style={{margin:'0px'}}>
			<NavBar/>
		</div>
	);
};

export default Home;