import React, { Component } from "react";
import * as firebase from "firebase/app";
import "firebase/analytics";
//COMPONENETS
import { Header } from "./Global/Header";
import TopSection from "./Global/TopSection";
import SearchBar from "./SearchBar/SearchBar";
import PlayerBubbles from "./Bubbles/PlayerBubbles";
import Table from "./Table/Table";
import { ErrorSnackbar } from "./SnackBar/ErrorSnackBar";
import { Footer } from "./Global/Footer";

//OTHER RESOURCES
import "./App.css";
import { ranks, firebaseConfig } from "./confVariables";

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

  //Does a player already exists in the Table.
  playerExist = player => {
    return this.playerNames.find(
      item => item.name === player.name && item.region === player.region
    );
  };

  //Update this.state with the searchBox input
  searchPlayer = player => {
    console.log(ranks, firebaseConfig);
    if (player.name !== "" && player.region !== "") {
      if (this.playerNames.length === 8) {
        this.errSnackBarRef.current.openSnackBar(
          "You can only track 8 players at the moment.",
          "MAXIMUM PLAYER COUNT REACHED !"
        );
      } else if (this.playerExist(player)) {
        this.errSnackBarRef.current.openSnackBar(
          `You are already tracking ${player.name}.`,
          "PLAYER EXISTS !"
        );
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
    let empty = this.state.empty;
    joined = [...this.state.players];
    this.setState({
      loading: true,
      empty: empty,
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
          if (window.innerWidth <= 610) {
            document
              .getElementById(player.data.platformInfo.platformUserId)
              .scrollIntoView({
                behavior: "smooth"
              });
          }
        } else {
          //Find the index of this player and delete it from the list of inputs;
          let index = this.playerNames.findIndex(
            item => item.name === player.name
          );
          this.playerNames.splice(index, 1);
          this.errSnackBarRef.current.openSnackBar(
            "Hmm... Make sure you picked the right Server !",
            "PLAYER NOT FOUND !"
          );
          let empty = this.state.empty;
          joined = [...this.state.players];
          this.setState({
            loading: false,
            empty: empty,
            players: joined
          });
        }
      })
      .catch(console.log);
  }

  render() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    // Sort the state with every new input
    this.state.players.sort(this.sortByRanks);
    return (
      <div className="mainContainer">
        <Header />
        <div>
          <TopSection loading={this.state.loading} />
          <SearchBar searchPlayer={this.searchPlayer} />
        </div>

        {!this.state.empty && (
          <div className="playersInfo">
            <PlayerBubbles
              players={this.state.players}
              delete={this.handleDelete}
            />
            <p className="deleteHint">Click an icon to delete the player</p>
            <Table players={this.state.players} />
          </div>
        )}
        <ErrorSnackbar ref={this.errSnackBarRef} />
        <Footer />
      </div>
    );
  }
}

export default App;
