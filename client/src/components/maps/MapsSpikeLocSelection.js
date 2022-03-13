import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MapsSpikeLocSelection.css";

function MapsSpikeLocSelection({ props }) {
	var { mapName, agentName, siteName, spikeLocation, playerLocation } = props;

	async function fetchSpikeLocations() {
		const res = await axios.get(`/api/spike-locations/${mapName.toLowerCase()}/${siteName.toLowerCase()}`);
		return res.data;
	}

	const [spikeLocations, setSpikeLocations] = useState([]);

	useEffect(() => {
		fetchSpikeLocations().then((s) => setSpikeLocations(s));
	}, []);

	return (
		<>
			<h2>
				{agentName} - {siteName} Site
			</h2>
			<div className="maps-site-container">
				<img src={`/../assets/images/maps/${mapName}/Site${siteName}Highlighted.png`} alt="" />
				{spikeLocations.map((location) => {
					return (
						<Link
							style={{ top: location.imagePlacement.y, left: location.imagePlacement.x }}
							to={`/maps/${mapName.toLowerCase()}/${agentName.toLowerCase()}/${siteName.toLowerCase()}/${
								location.spikeID
							}`}
						>
							{`${location.spikeID}`}
						</Link>
					);
				})}
			</div>
		</>
	);
}

export default MapsSpikeLocSelection;
