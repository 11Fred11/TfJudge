import React from "react";
import Player from "./Player.js";
import './Table.css';

const Table = props => {
  return (
    <section className="playersTable">
      <table>
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col" colSpan="2">
              Player
            </th>

            <th scope="col">Tier icon</th>
            <th scope="col">Tier</th>
            <th scope="col">Points</th>
            <th scope="col">Win %</th>
            <th scope="col">Wins</th>
            <th scope="col">Losses</th>
            <th scope="col">Game Played</th>
          </tr>
        </thead>
        <tbody>
          {props.players.map((player, i) => {
            return (
              <Player
                key={player.data.platformInfo.platformUserId}
                rank={i}
                icon={player.data.platformInfo.avatarUrl}
                name={player.data.platformInfo.platformUserIdentifier}
                tierIcon={player.data.segments[0].stats.tier.metadata.imageUrl}
                tierValue={player.data.segments[0].stats.tier.displayValue}
                lp={player.data.segments[0].stats.leaguePoints.displayValue}
                winRate={
                  player.data.segments[0].stats.wlPercentage.displayValue
                }
                wins={player.data.segments[0].stats.wins.displayValue}
                losses={player.data.segments[0].stats.losses.displayValue}
                gamePlayed={
                  player.data.segments[0].stats.matchesPlayed.displayValue
                }
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
