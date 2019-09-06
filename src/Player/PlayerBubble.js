import React from "react";
import "./PlayerBubble.css";
import binIcon from "../images/delete-bin-50.png";

const playerBubble = props => {
  return (
    <div className="container" key={props.id}>
      <img src={props.playerIcon} alt="Profile icon" className="bubble" />
      <p className="title">{props.playerName}</p>
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

export default playerBubble;
