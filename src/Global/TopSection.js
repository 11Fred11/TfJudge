import React from "react";
import tftLogo from "../images/TFT-logo.svg";
import tftLogoLoading from "../images/TFT-logo-loading.svg";
import "./TopSection.css";

const TopSection = props => {
  return (
    <div className="topSection">
      <img
        src={props.loading ? tftLogoLoading : tftLogo}
        alt="TFT LOGO"
        className="tftLogo"
      />
      <h1>COMPARE YOUR TFT STATS</h1>
    </div>
  );
};

export default TopSection;
