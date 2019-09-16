import React, { Component } from "react";
import Player from "./Player/Player";
import PlayerBubble from "./Player/PlayerBubble";
import SearchBar from "./SearchBar/SearchBar";
import tftLogo from "./images/TFT-logo.svg";
import tftLogoLoading from "./images/TFT-logo-loading.svg";
import "./App.css";
import { ErrorSnackbar } from "./SnackBar/ErrorSnackBar";
import { PlayerExistsSnackBar } from "./SnackBar/PlayerExistsSnackBar";
import { Footer } from "./Global/Footer";
import { Header } from "./Global/Header";

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
  //General State
  state = {
    loading: false,
    empty: true,
    players: []
  };

  //Players names entred through the search bar
  playerNames = [];

  //Reference to the error snackbar componenet
  errSnackBarRef = React.createRef();

  //Reference to the player exists snackbar componenet
  plyerExSnackBarRef = React.createRef();

  //Does a player already exists in the Table.
  playerExist = player => {
    return this.playerNames.find(
      item => item.name === player.name && item.region === player.region
    );
  };

  //Update this.state with the searchBox input
  searchPlayer = player => {
    if (player.name !== "" && player.region !== "") {
      if (this.playerNames.length === 8) {
        let joined = [...this.state.players];
        this.setState({
          loading: false,
          empty: false,
          players: joined
        });
      } else if (this.playerExist(player)) {
        this.plyerExSnackBarRef.current.openSnackBar(player.name);
      } else {
        this.playerNames.push(player);
        this.fetchPlayerData(player);
      }
    }
  };

  //Delete player handler
  handleDelete = index => {
    this.playerNames.splice(index, 1);
    let joined = [...this.state.players];
    joined.splice(index, 1);
    let empt = this.playerNames.length === 0;

    this.setState({
      loading: false,
      empty: empt,
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
  fetchPlayerData(player) {
    let joined = [];
    joined = [...this.state.players];
    this.setState({
      loading: true,
      empty: false,
      players: joined
    });
    // eslint-disable-next-line
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.tracker.gg/api/v2/tft/standard/profile/riot/${player.name}?region=${player.region}`
    )
      .then(res => res.json())
      .then(player => {
        if (!player.errors) {
          joined = [...this.state.players];
          joined.push(player);
          this.setState({
            loading: false,
            empty: false,
            players: joined
          });
          /* window.scrollTo({
            top: 200,
            left: 0,
            behavior: "smooth"
          }); */
        } else {
          console.log("error : player not found");

          //Find the index of this player and delete it from the list of inputs;
          let index = this.playerNames.findIndex(
            item => item.name === player.name
          );
          this.playerNames.splice(index, 1);
          this.errSnackBarRef.current.openSnackBar(player.errors[0].message);
          joined = [...this.state.players];
          this.setState({
            loading: false,
            empty: false,
            players: joined
          });
        }
      })
      .catch(console.log);
  }

  render() {
    // Sort the state with every new input
    this.state.players.sort(this.sortByRanks);
    return (
      <div className="mainContainer">
        <Header></Header>
        <div className="topSection">
          <img
            src={this.state.loading ? tftLogoLoading : tftLogo}
            alt="TFT LOGO"
            className="tftLogo"
          />
          <h1>COMPARE YOUR TFT STATS</h1>
        </div>
        <SearchBar searchPlayer={this.searchPlayer} />
        <ErrorSnackbar ref={this.errSnackBarRef} />
        <PlayerExistsSnackBar ref={this.plyerExSnackBarRef} />
        {!this.state.empty && (
          <div className="playersInfo">
            <div className="bubbles">
              {this.state.players.map((player, i) => {
                return (
                  <PlayerBubble
                    key={player.data.platformInfo.platformUserId}
                    playerIcon={player.data.platformInfo.avatarUrl}
                    playerName={player.data.platformInfo.platformUserIdentifier}
                    onDelete={() => {
                      this.handleDelete(i);
                    }}
                  />
                );
              })}
            </div>
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
                  {this.state.players.map((player, i) => {
                    return (
                      <Player
                        key={player.data.platformInfo.platformUserId}
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
                          player.data.segments[0].stats.leaguePoints
                            .displayValue
                        }
                        winRate={
                          player.data.segments[0].stats.wlPercentage
                            .displayValue
                        }
                        wins={player.data.segments[0].stats.wins.displayValue}
                        losses={
                          player.data.segments[0].stats.losses.displayValue
                        }
                        gamePlayed={
                          player.data.segments[0].stats.matchesPlayed
                            .displayValue
                        }
                      />
                    );
                  })}
                </tbody>
              </table>
            </section>
          </div>
        )}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
