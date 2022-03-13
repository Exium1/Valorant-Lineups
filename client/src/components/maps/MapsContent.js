import MapsSiteSelection from "./MapsSiteSelection";
import MapsSpikeLocSelection from "./MapsSpikeLocSelection";
import MapsLineupBrowse from "./MapsLineupBrowse";
import "./MapsContent.css";

function MapsContent(props) {
	var { mapName, agentName, siteName, spikeLocation, playerLocation } = props;

	return (
		<div className="maps-content">
			{!siteName ? <MapsSiteSelection props={props} /> : ""}
			{siteName && !spikeLocation ? <MapsSpikeLocSelection props={props} /> : ""}
			{siteName && spikeLocation && !playerLocation ? (
				<MapsLineupBrowse props={props} />
			) : (
				// <Lineup props={props} />
				""
			)}
		</div>
	);
}

export default MapsContent;
