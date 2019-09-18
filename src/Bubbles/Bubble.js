import React from "react";
import binIcon from "../images/delete-bin-50.png";

const Bubble = props => {
  return (
    <div className="bubbleContainer">
      <img src={props.playerIcon} alt="Profile icon" className="bubble" />
      <div className="overlay"></div>
      <div className="button">
        <img
          className="binIcon"
          src={binIcon}
          onClick={props.onDelete}
          alt="Delete"
        />
      </div>
    </div>
  );
};

export default Bubble;
