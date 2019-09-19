import React from "react";
import Bubble from "./Bubble";
import "./PlayerBubble.css";

const PlayerBubbles = props => {
  return (
    <div className="bubbles">
      {props.players.map((player, i) => {
        return (
          <Bubble
            key={player.data.platformInfo.platformUserId}
            playerIcon={player.data.platformInfo.avatarUrl}
            onDelete={() => {
              props.delete(i);
            }}
          />
        );
      })}
    </div>
  );
};
export default PlayerBubbles;
