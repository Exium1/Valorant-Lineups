import React from "react";
import { Redirect, Link } from "react-router-dom";
import "./AgentContentTab.css";

const AgentContentTab = (props) => {
    const {
        mapName,
        agentName,
        siteName,
        spikeLocation,
        playerLocation
    } = props;

    /*  TODO
        - add logic to prevent spike sites above C (correspond to map)
    */

    console.log(mapName, agentName, siteName, spikeLocation, playerLocation);

    return (
        <>
            <h2>{agentName}</h2>

            {siteName ? (
                <p>Site {siteName}</p>
            ) : (
                <div className="site-options">
                    <Link
                        to={`/maps/${mapName.toLowerCase()}/agents/${agentName.toLowerCase()}/site/a`}
                        className="site-option"
                    >
                        <img
                            src={`/../assets/images/maps/${mapName}/SiteA.png`}
                            alt=""
                        />
                        <a className="site-name">Site A</a>
                    </Link>

                    <Link
                        to={`/maps/${mapName.toLowerCase()}/agents/${agentName.toLowerCase()}/site/b`}
                        className="site-option"
                    >
                        <img
                            src={`/../assets/images/maps/${mapName}/SiteB.png`}
                            alt=""
                        />
                        <a className="site-name">Site B</a>
                    </Link>

                    <Link
                        to={`/maps/${mapName.toLowerCase()}/agents/${agentName.toLowerCase()}/site/c`}
                        className="site-option"
                    >
                        <img
                            src={`/../assets/images/maps/${mapName}/SiteA.png`}
                            alt=""
                        />
                        <a className="site-name">Site C</a>
                    </Link>
                </div>
            )}

            {siteName && !spikeLocation ? (
                <div className="site-selected">
                    <img
                        src={`/../assets/images/maps/${mapName}/SiteAHighlighted.png`}
                        alt=""
                    />
                    <div className="spike-location">
                        <a>Test 1</a>
                    </div>
                    <div className="spike-location" right="0">
                        <a>Test 2</a>
                    </div>
                    <div className="spike-location">
                        <a>Test 3</a>
                    </div>
                </div>
            ) : (
                false
            )}

            {siteName && spikeLocation && !playerLocation ? (
                <div className="player-location"></div>
            ) : (
                false
            )}
        </>
    );
};

export default AgentContentTab;
