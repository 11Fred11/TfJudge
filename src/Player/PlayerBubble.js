import React from "react";
import "./PlayerBubble.css";

const playerBubble = props => {
  return (
    <div className="container" key={props.id}>
      <img src={props.playerIcon} alt="Profile icon" className="bubble" />
      <p className="title">{props.playerName}</p>
      <div className="overlay"></div>
      <div className="button">
        <img
          src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png"
          onClick={props.onDelete}
        />
      </div>
    </div>
  );
};

export default playerBubble;
