import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Maps from "./pages/maps/Maps";
import "./App.css";
import "./Fonts.css";

class App extends Component {
	render(props) {
		var agentNames = [
			"Astra",
			"Breach",
			"Brimstone",
			"Cypher",
			"Jett",
			"Killjoy",
			"Omen",
			"Phoenix",
			"Raze",
			"Reyna",
			"Sage",
			"Skye",
			"Sova",
			"Viper",
			"Yoru"
		];
		var mapNames = ["Ascent", "Bind", "Haven", "Icebox", "Split"];

		/*

        Lineup Quick Link
        - lineups/[_id]
        
        Map/Agent selected
        - maps/ascent/agent/astra

        Site selected
        - maps/ascent/agent/astra/site/a

        Plant location selected
        - maps/ascent/agent/astra/site/a/plant/3

        Plant location selected (Defense true, attacking is default)
        - maps/ascent/astra/a/3?defense=true
        - maps/ascent/astra/a/3/423

        */

		// const userName = this.props;
		console.log(Object.keys(this.props));

		return (
			<BrowserRouter>
				<Navbar />
				<Route path="/" exact component={() => <Home />} />
				<Route path="/maps/:mapName" exact render={(props) => <Maps {...props} />} />
				<Route path="/maps/:mapName/:agentName" exact render={(props) => <Maps {...props} />} />
				<Route path="/maps/:mapName/:agentName/:siteName" exact render={(props) => <Maps {...props} />} />
				<Route
					path="/maps/:mapName/:agentName/:siteName/:spikeLocation"
					exact
					render={(props) => <Maps {...props} />}
				/>
				<Route
					path="/maps/:mapName/:agentName/:siteName/:spikeLocation/:lineupID"
					exact
					render={(props) => <Maps {...props} />}
				/>
				{/* <Route path="/maps/:mapName/agents/:agentName" exact render={(props) => <Maps {...props} />} />
				<Route
					path="/maps/:mapName/agents/:agentName/site/:siteName"
					exact
					render={(props) => <Maps {...props} />}
				/> */}
			</BrowserRouter>
			// <Router>
			//     <Navbar />
			//     <Switch>
			//         <Route path="/" exact component={() => <Home />} />
			//         <Route
			//             path="/maps/:mapName"
			//             component={() => <Maps mapName="Ascent" />}
			//         />
			//         {/* <Route
			//             path="/maps/bind"
			//             exact
			//             component={() => <Maps mapName="Bind" />}
			//         />
			//         <Route
			//             path="/maps/haven"
			//             exact
			//             component={() => <Maps mapName="Haven" />}
			//         />
			//         <Route
			//             path="/maps/icebox/"
			//             exact
			//             component={() => <Maps mapName="Icebox" />}
			//         />
			//         <Route
			//             path="/maps/split"
			//             exact
			//             component={() => <Maps mapName="Split" />}
			//         /> */}
			//     </Switch>
			// </Router>
		);
	}
}

export default App;
