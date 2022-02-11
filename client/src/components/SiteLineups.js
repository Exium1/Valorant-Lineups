import React, { Component } from "react";
import "./SiteLineups.css";
import ImageMapper from "react-image-mapper";

export class SiteLineups extends Component {
    render() {
        var { mapName, agentName, siteName } = this.props;
        console.log(mapName, agentName, siteName);

        var IMAGE_URL = `/../assets/images/maps/${mapName}/Site${siteName}Highlighted.png`;
        var SITES_MAP = {
            name: "sites-map",
            areas: [
                {
                    name: "1",
                    shape: "poly",
                    coords: [25, 33, 27, 300, 128, 240, 128, 94],
                    preFillColor: "green",
                    fillColor: "blue",
                    onClick: (area, index, event) => {
                        console.log("blue click");
                    }
                },
                {
                    name: "2",
                    shape: "poly",
                    coords: [219, 118, 220, 210, 283, 210, 284, 119],
                    preFillColor: "pink"
                },
                {
                    name: "3",
                    shape: "poly",
                    coords: [381, 241, 383, 94, 462, 53, 457, 282],
                    fillColor: "yellow"
                },
                {
                    name: "4",
                    shape: "poly",
                    coords: [245, 285, 290, 285, 274, 239, 249, 238],
                    preFillColor: "red"
                },
                { name: "5", shape: "circle", coords: [170, 100, 25] }
            ]
        };

        function sitePlantClick() {
            console.log("yo");
        }

        return (
            <>
                <h2>{agentName}</h2>
                <div className="site-map-container">
                    <img
                        src={`/../assets/images/maps/${mapName}/Site${siteName}Highlighted.png`}
                        alt=""
                    />
                </div>
            </>
        );
    }
}

export default SiteLineups;
