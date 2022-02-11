import React, { Component } from "react";
import PageContainer from "../../components/PageContainer";
import LandingSection from "../../components/LandingSection";

import "./Home.css";

class Home extends Component {
	render() {
		return (
			<>
				<LandingSection />
				<PageContainer>
					<p>New section!</p>
				</PageContainer>
			</>
		);
	}
}

export default Home;
