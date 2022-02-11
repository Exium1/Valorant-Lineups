import React from "react";
import { Link } from "react-router-dom";
import "./MapSelection.css";

function MapSelection({ className }) {
    return (
        <div
            className={
                className ? `map-selection ${className}` : "map-selection"
            }
        >
            <h2>Choose your map:</h2>
            <div className="map-list">
                <Link to="/maps/ascent">
                    <div>
                        <img
                            src={"./assets/images/maps/Ascent/TitleCard.png"}
                            alt=""
                        />
                    </div>
                </Link>
                <Link to="/maps/bind">
                    <div>
                        <img
                            src={"./assets/images/maps/Bind/TitleCard.png"}
                            alt=""
                        />
                    </div>
                </Link>
                <Link to="/maps/haven">
                    <div>
                        <img
                            src={"./assets/images/maps/Haven/TitleCard.png"}
                            alt=""
                        />
                    </div>
                </Link>
                <Link to="/maps/icebox">
                    <div>
                        <img
                            src={"./assets/images/maps/Icebox/TitleCard.png"}
                            alt=""
                        />
                    </div>
                </Link>
                <Link to="/maps/split">
                    <div>
                        <img
                            src={"./assets/images/maps/Split/TitleCard.png"}
                            alt=""
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MapSelection;
