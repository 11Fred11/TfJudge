import React, { Component } from "react";
import Player from "./Player/Player";
import PlayerBubble from "./Player/PlayerBubble";
import "./App.css";

//This is a custom ranking system for players required for the sort function
const ranks = {
  "IRON IV": 100,
  "IRON III": 200,
  "IRON II": 300,
  "IRON I": 400,
  "BRONZE IV": 500,
  "BRONZE III": 600,
  "BRONZE II": 700,
  "BRONZE I": 800,
  "SILVER IV": 900,
  "SILVER III": 1000,
  "SILVER II": 1100,
  "SILVER I": 1200,
  "GOLD IV": 1300,
  "GOLD III": 1400,
  "GOLD II": 1500,
  "GOLD I": 1600,
  "PLATINUM IV": 1700,
  "PLATINUM III": 1800,
  "PLATINUM II": 1900,
  "PLATINUM I": 2000,
  "DIAMOND IV": 2100,
  "DIAMOND III": 2200,
  "DIAMOND II": 2300,
  "DIAMOND I": 2500,
  MASTER: 3000,
  CHALLENGER: 5000
};

class App extends Component {
  state = {
    inputs: [
      "fredjie",
      "salipow",
      "the carry rumble",
      "twisted john",
      "mart sidi"
    ],
    loading: true,
    players: []
  };

  handleDelete = index => {
    let joined = [];
    joined = [...this.state.players];
    joined.splice(index, 1);
    const loading = !joined.length > 0;
    this.setState({
      inputs: [
        "fredjie",
        "salipow",
        "the carry rumble",
        "twisted john",
        "mart sidi"
      ],
      loading: loading,
      players: joined
    });
  };
  //Sort players by their ranks
  sortByRanks = (playerOne, playerTwo) => {
    let firstIndex =
      ranks[playerOne.data.segments[0].stats.tier.displayValue] +
      playerOne.data.segments[0].stats.leaguePoints.value;
    let secondIndex =
      ranks[playerTwo.data.segments[0].stats.tier.displayValue] +
      playerTwo.data.segments[0].stats.leaguePoints.value;

    return secondIndex - firstIndex;
  };

  //Fetch each player's stats when the component get mounted
  componentDidMount() {
    let joined = [];
    this.state.inputs.map(name => {
      fetch(
        `https://cors-anywhere.herokuapp.com/https://api.tracker.gg/api/v2/tft/standard/profile/riot/${name}?region=EUW`
      )
        .then(res => res.json())
        .then(player => {
          joined = [...this.state.players]; //using the new spread operator to clone the state
          joined.push(player);
          this.setState({
            inputs: [
              "fredjie",
              "salipow",
              "the carry rumble",
              "twisted john",
              "mart sidi"
            ],
            loading: false,
            players: joined
          });
          console.log(
            player.data.platformInfo.platformUserIdentifier,
            ranks[player.data.segments[0].stats.tier.displayValue] +
              player.data.segments[0].stats.leaguePoints.value
          );
          // Sort the state with every new input
          this.state.players.sort(this.sortByRanks);
        })
        .catch(console.log);
    });
  }

  render() {
    return (
      <div>
        {!this.state.loading && (
          <div>
            <div>
              {this.state.players.map((player, i) => {
                return (
                  <PlayerBubble
                    id={player.data.platformInfo.platformUserId}
                    playerIcon={player.data.platformInfo.avatarUrl}
                    playerName={player.data.platformInfo.platformUserIdentifier}
                    onDelete={() => {
                      this.handleDelete(i);
                    }}
                  />
                );
              })}
            </div>
            <table>
              <thead>
                <tr>
                  <th scope="col">Rank</th>
                  <th scope="col">Player Icon </th>
                  <th scope="col">Player Name</th>
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
                {this.state.players.map((player, i) => {
                  return (
                    <Player
                      id={player.data.platformInfo.platformUserId}
                      rank={i}
                      icon={player.data.platformInfo.avatarUrl}
                      name={player.data.platformInfo.platformUserIdentifier}
                      tierIcon={
                        player.data.segments[0].stats.tier.metadata.imageUrl
                      }
                      tierValue={
                        player.data.segments[0].stats.tier.displayValue
                      }
                      lp={
                        player.data.segments[0].stats.leaguePoints.displayValue
                      }
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
          </div>
        )}
      </div>
    );
  }
}

export default App;
