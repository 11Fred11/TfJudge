import React from "react";

const player = props => {
  return (
    <tr key={props.id}>
      <td>{props.rank + 1}</td>
      <td>
        <img src={props.icon} alt="Player icon" className="profileIcon" />
      </td>
      <td>{props.name}</td>
      <td>
        <img src={props.tierIcon} alt="Tier icon" className="tierIcon" />
      </td>
      <td>{props.tierValue}</td>
      <td>{props.lp}</td>
      <td>{props.winRate}</td>
      <td>{props.wins}</td>
      <td>{props.losses}</td>
      <td>{props.gamePlayed}</td>
    </tr>
  );
};

export default player;
