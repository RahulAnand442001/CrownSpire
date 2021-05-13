import React from "react";

// stylesheet
//import "./homepage.styles.scss";

// components
import Directory from "../../components/directory/directory.component";

// syled JSS (CSS in JS)
import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
	return (
		<HomePageContainer>
			<Directory />
		</HomePageContainer>
	);
};

export default HomePage;
