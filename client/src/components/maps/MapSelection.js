import React from "react";
import { Link } from "react-router-dom";
import "./MapSelection.css";

function MapSelection({ className }) {
	var mapNames = ["Ascent", "Bind", "Breeze", "Fracture", "Haven", "Icebox", "Split"];
	return (
		<div className={className ? `map-selection ${className}` : "map-selection"}>
			<h2>Quick Select:</h2>
			<div className="map-list">
				{mapNames.map((map) => {
					return (
						<Link to={`/maps/${map}`}>
							<div>
								<img src={`./assets/images/maps/${map}/TitleCard.png`} alt="" />
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default MapSelection;
