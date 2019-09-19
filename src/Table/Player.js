import React from "react";
import "./Player.css";

const player = props => {
  return (
    <tr id={props.id}>
      <td data-th="Rank">#{props.rank + 1}</td>
      <td data-th="Player Icon">
        <img src={props.icon} alt="Player icon" className="profileIcon" />
      </td>
      <td data-th="Name">{props.name}</td>
      <td data-th="Tier Icon">
        <img src={props.tierIcon} alt="Tier icon" className="tierIcon" />
      </td>
      <td data-th="Tier">{props.tierValue}</td>
      <td data-th="Points">{props.lp}</td>
      <td data-th="Win %">{props.winRate}</td>
      <td data-th="Wins">{props.wins}</td>
      <td data-th="Losses">{props.losses}</td>
      <td data-th="Game Played">{props.gamePlayed}</td>
    </tr>
  );
};

export default player;
