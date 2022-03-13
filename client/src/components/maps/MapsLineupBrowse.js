import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MapsLineupBrowse.css";

function MapsLineupBrowse({ props }) {
	var { mapName, agentName, siteName, spikeLocation, playerLocation } = props;

	async function fetchLineups() {
		try {
			const res = await axios.get(
				`/api/lineups/${mapName.toLowerCase()}/${agentName.toLowerCase()}/${siteName.toLowerCase()}/${spikeLocation}`
			);

			return res.data;
		} catch (err) {
			console.log(err);
		}
	}

	async function fetchSpikeLocation() {
		const res = await axios.get(
			`/api/spike-locations/${mapName.toLowerCase()}/${siteName.toLowerCase()}/${spikeLocation}`
		);

		console.log(res);

		return res.data[0];
	}

	const [lineups, setLineups] = useState([]);
	const [spikeLocationDesc, setSpikeLocation] = useState([]);

	useEffect(() => {
		fetchLineups().then((s) => setLineups(s));
		fetchSpikeLocation().then((loc) => setSpikeLocation(loc));
	}, []);

	return (
		<>
			<h2>
				{agentName} - {siteName} Site
			</h2>
			<h2>Plant for {spikeLocationDesc.name}</h2>
			<div className="maps-lineup-browse">
				<div>
					<h3>Defense Side:</h3>
					<input type={"checkbox"} id="maps-defense-toggle" />
				</div>
				<div className="maps-lineups-list">
					{lineups.map((l) => {
						return (
							<div className="maps-lineup-item" key={l._id}>
								<Link key={l._id}>
									<div className="maps-lineup-desc">
										<h4>{l.playerLocation}</h4>
										<p>{l.desc}</p>
									</div>
									<img
										src={`/../assets/images/lineups/${mapName.toLowerCase()}/${siteName.toLowerCase()}/${
											l._id
										}_main.png`}
										alt=""
									/>
								</Link>
							</div>
						);
					})}
					{lineups.length > 0 ? "" : <h3>Sorry, there are no lineups for this location.</h3>}
				</div>
			</div>
		</>
	);
}

export default MapsLineupBrowse;
