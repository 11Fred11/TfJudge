import React from "react";
import "./Player.css";

const playerBubble = props => {
  return (
    <div className="container">
      <img src={props.playerIcon} alt="Profile icon" className="bubble" />
      <p className="title">{props.playerName}</p>
      <div className="overlay"></div>
      <div className="button">
        <button onClick={props.onDelete}>DELETE</button>
      </div>
    </div>
  );
};

export default playerBubble;
