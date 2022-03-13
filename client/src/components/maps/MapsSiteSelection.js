import { Link } from "react-router-dom";
import "./MapsSiteSelection.css";

function MapsSiteSelection({ props }) {
	var { mapName, agentName, siteName, spikeLocation, playerLocation } = props;

	console.log(props);

	return (
		<>
			<h2>{agentName}</h2>
			<h3>Choose a site:</h3>
			<div className="site-options">
				<Link to={`/maps/${mapName.toLowerCase()}/${agentName.toLowerCase()}/a`} className="site-option">
					<img src={`/../assets/images/maps/${mapName}/SiteA.png`} alt="" />
					<p className="site-name">Site A</p>
				</Link>

				<Link to={`/maps/${mapName.toLowerCase()}/${agentName.toLowerCase()}/b`} className="site-option">
					<img src={`/../assets/images/maps/${mapName}/SiteB.png`} alt="" />
					<p className="site-name">Site B</p>
				</Link>
				{mapName.toLowerCase() == "haven" ? (
					<Link to={`/maps/${mapName.toLowerCase()}/${agentName.toLowerCase()}/c`} className="site-option">
						<img src={`/../assets/images/maps/${mapName}/SiteA.png`} alt="" />
						<p className="site-name">Site C</p>
					</Link>
				) : (
					""
				)}
			</div>
		</>
	);
}

export default MapsSiteSelection;
