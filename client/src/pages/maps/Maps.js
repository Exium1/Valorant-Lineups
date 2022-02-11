import React from "react";
import PageContainer from "../../components/PageContainer";
import SiteLineups from "../../components/SiteLineups";
import { Redirect, Link } from "react-router-dom";
import "./Maps.css";
import AgentContentTab from "../../components/AgentContentTab";

function Maps(props) {
    console.log("Maps page loaded...");

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

    var mapName = props.match.params.mapName.toLowerCase();
    mapName = mapName[0].toUpperCase() + mapName.slice(1, mapName.length);

    var agentName;
    var siteName;
    var spikeLocation;
    var playerLocation;

    if (!props.match.params.agentName) {
        console.log("Redirect...");
        return (
            <Redirect
                to={`/maps/${mapName.toLowerCase()}/agents/${agentNames[0].toLowerCase()}`}
            />
        );
        //return props.history.push("/path");
    } else {
        agentName = props.match.params.agentName.toLowerCase();
        agentName =
            agentName[0].toUpperCase() + agentName.slice(1, agentName.length);
        mapName = mapName[0].toUpperCase() + mapName.slice(1, mapName.length);

        console.log("No redirect...", mapName, agentName);
    }

    if (props.match.params.siteName) {
        siteName = props.match.params.siteName.toUpperCase();
    }

    function selectAgent(agentIndex) {
        console.log(`Selected ${agentNames[agentIndex]}`);

        var tabContent = document.getElementsByClassName("tabs-content");

        for (var i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }

        tabContent[agentIndex].style.display = "block";

        var tabButtons = document.getElementsByClassName("tab-button");

        for (i = 0; i < tabButtons.length; i++) {
            var tabButton = tabButtons[i];

            if (i === agentIndex) tabButton.className += " selected-tab";
            else if (tabButton.className.includes(" selected-tab")) {
                console.log(agentIndex, tabButton.className);
                tabButton.className = tabButton.className.replace(
                    " selected-tab",
                    ""
                );
            }
        }
    }

    return (
        <>
            <img
                className="map-bg-image"
                src={`/../assets/images/maps/${mapName}/LoadingScreen.png`}
                alt=""
            />
            <PageContainer first="true" className="map-header">
                <h1>{mapName}</h1>
                <div className="tabs-container">
                    <h2>Agents</h2>
                    <ul className="tabs-buttons">
                        {agentNames.map((agent) => {
                            if (
                                agentNames.indexOf(agent) ===
                                agentNames.indexOf(agentName)
                            )
                                return (
                                    <li
                                        className={"tab-button selected-tab"}
                                        key={agentNames.indexOf(agent)}
                                    >
                                        <Link
                                            to={`/maps/${mapName.toLowerCase()}/agents/${agent.toLowerCase()}`}
                                        >
                                            <button>
                                                <img
                                                    src={`/../assets/images/agents/${agent}Icon.png`}
                                                    alt=""
                                                />
                                                {agent}
                                            </button>
                                        </Link>
                                    </li>
                                );
                            else
                                return (
                                    <li
                                        className="tab-button"
                                        key={agentNames.indexOf(agent)}
                                    >
                                        <Link
                                            to={`/maps/${mapName.toLowerCase()}/agents/${agent.toLowerCase()}`}
                                        >
                                            <button>
                                                <img
                                                    src={`/../assets/images/agents/${agent}Icon.png`}
                                                    alt=""
                                                />
                                                {agent}
                                            </button>
                                        </Link>
                                    </li>
                                );
                        })}
                    </ul>
                    {/* <ul className="tabs-buttons">
                        {agentNames.map((agent) => {
                            if (agentNames.indexOf(agent) === 0)
                                return (
                                    <li
                                        onClick={() => selectAgent(0)}
                                        className={"tab-button selected-tab"}
                                        key={agentNames.indexOf(agent)}
                                    >
                                        <button>
                                            <img
                                                src={`/../assets/images/agents/${agent}Icon.png`}
                                                alt=""
                                            />
                                            {agent}
                                        </button>
                                    </li>
                                );
                            else
                                return (
                                    <li
                                        onClick={() =>
                                            selectAgent(
                                                agentNames.indexOf(agent)
                                            )
                                        }
                                        className="tab-button"
                                        key={agentNames.indexOf(agent)}
                                    >
                                        <button>
                                            <img
                                                src={`/../assets/images/agents/${agent}Icon.png`}
                                                alt=""
                                            />
                                            {agent}
                                        </button>
                                    </li>
                                );
                        })}
                    </ul> */}

                    <div className="tabs-content">
                        <AgentContentTab
                            mapName={mapName}
                            agentName={agentName}
                            siteName={siteName}
                            spikeLocation={spikeLocation}
                            playerLocation={playerLocation}
                        />
                    </div>

                    {/* {agentNames.map((agent) => {
                        var customStyle = {};
                        if (
                            agentNames.indexOf(agent) ===
                            agentNames.indexOf(agentName)
                        )
                            customStyle = { display: "block" };

                        return (
                            <div className="tabs-content" style={customStyle}>
                                {siteName ? (
                                    <SiteLineups
                                        agentName={agentName}
                                        mapName={mapName}
                                        siteName={siteName}
                                    />
                                ) : (
                                    <div className="site-options">
                                        <Link
                                            className="site"
                                            to={`/maps/${mapName.toLowerCase()}/agents/${agent.toLowerCase()}/site/a`}
                                        >
                                            <img
                                                src={`/../assets/images/maps/${mapName}/SiteA.png`}
                                                alt=""
                                            />
                                            Site A
                                        </Link>
                                        <Link
                                            to={`/maps/${mapName.toLowerCase()}/agents/${agent.toLowerCase()}/site/b`}
                                        >
                                            {" "}
                                            <img
                                                src={`/../assets/images/maps/${mapName}/SiteB.png`}
                                                alt=""
                                            />
                                            Site B
                                        </Link>
                                        <Link
                                            to={`/maps/${mapName.toLowerCase()}/agents/${agent.toLowerCase()}/site/c`}
                                        >
                                            {" "}
                                            <img
                                                src={`/../assets/images/maps/${mapName}/SiteA.png`}
                                                alt=""
                                            />
                                            Site C
                                        </Link>
                                    </div>
                                )}
                            </div>
                        );
                    })} */}
                </div>
            </PageContainer>
        </>
    );
}

export default Maps;
