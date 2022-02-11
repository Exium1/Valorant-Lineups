import React from "react";
import "./LandingSection.css";
import PageContainer from "./PageContainer";
import MapSelection from "./MapSelection";

function LandingSection() {
    return (
        <>
            <div className="landing-section">
                <img
                    className="landing-image"
                    src={"./assets/images/ValorantCover2.png"}
                    alt=""
                />
                <PageContainer>
                    <div className="landing-text">
                        <h1>Valorant Lineups</h1>
                        <p>
                            Valorant Lineups allow you to learn and use the best
                            lineups through interactive maps, videos, images,
                            and well-written descriptions.
                        </p>
                    </div>
                    <MapSelection />
                </PageContainer>
            </div>
            <PageContainer>
                <MapSelection className="separate" />
            </PageContainer>
        </>
    );
}

export default LandingSection;
