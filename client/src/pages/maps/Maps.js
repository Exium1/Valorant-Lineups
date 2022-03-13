import React, { useState } from "react";
import PageContainer from "../../components/PageContainer";
import MapsContent from "../../components/maps/MapsContent";
import { Redirect, Link } from "react-router-dom";
import "./Maps.css";

function Maps(props) {
	var agentName;
	var agentNames = [
		"Astra",
		"Breach",
		"Brimstone",
		"Chamber",
		"Cypher",
		"Jett",
		"KAYO",
		"Killjoy",
		"Neon",
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

	var mapName = props.match.params.mapName.toLowerCase();
	mapName = mapName[0].toUpperCase() + mapName.slice(1, mapName.length);

	var siteName = props.match.params.siteName;
	var spikeLocation = props.match.params.spikeLocation;
	var playerLocation = props.match.params.playerLocation;

	// useState({
	// 	mapName: mapName.toLowerCase(),
	// 	agentName: "Astra"
	// });

	// Redirect and set agent to first in list if agent not given
	if (!props.match.params.agentName) {
		return <Redirect to={`/maps/${mapName.toLowerCase()}/${agentNames[0].toLowerCase()}`} />;
	} else {
		agentName = props.match.params.agentName.toLowerCase();
		agentName = agentName[0].toUpperCase() + agentName.slice(1, agentName.length);
	}

	// Set siteName if given
	if (props.match.params.siteName) {
		siteName = props.match.params.siteName.toUpperCase();
	}

	return (
		<>
			<img className="maps-background" src={`/../assets/images/maps/${mapName}/LoadingScreen.png`} alt="" />
			<PageContainer first="true" className="maps-page">
				<h1>{mapName}</h1>
				<div className="maps-container">
					<ul className="maps-agents">
						{agentNames.map((agent) => {
							return (
								<li
									className={
										agentNames.indexOf(agent) === agentNames.indexOf(agentName)
											? "selected-agent"
											: ""
									}
								>
									<Link to={`/maps/${mapName.toLowerCase()}/${agent.toLowerCase()}`}>
										<img src={`/../assets/images/agents/${agent}Icon.png`} alt="" />
										{agent}
									</Link>
								</li>
							);
						})}
					</ul>
					<div className="maps-content-wrapper">
						<MapsContent
							mapName={mapName}
							agentName={agentName}
							siteName={siteName}
							spikeLocation={spikeLocation}
							playerLocation={playerLocation}
						/>
					</div>
				</div>
			</PageContainer>
		</>
	);
}

export default Maps;
