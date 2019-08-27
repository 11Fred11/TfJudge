import React, { Component } from "react";

class App extends Component {
  state = {
    inputs: ["fredjie", "salipow","the%20carry%20rumble"],
    loading: true,
    players: []
  };
  componentDidMount() {
    let joined = [];
    this.state.inputs.map(name => {
      fetch(
        `https://cors-anywhere.herokuapp.com/https://api.tracker.gg/api/v2/tft/standard/profile/riot/${name}?region=EUW`
      )
        .then(res => res.json())
        .then(data => {
          joined = [...this.state.players];
          joined.push(data);
          this.setState({
            inputs: ["fredjie", "salipow"],
            loading: false,
            players: joined
          });
        })
        .catch(console.log);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-12">
          <h1>PLAYERS</h1>
          {this.state.players.map(player => {
            return (
              <li key={player.data.platformInfo.platformUserId}>
                {this.state.loading && <p>Loading...</p>}
                {!this.state.loading &&
                  player.data.platformInfo.platformUserIdentifier +
                    " | " +
                    player.data.segments[0].stats.tier.displayValue +
                    " | " +
                    player.data.segments[0].stats.leaguePoints.displayValue}
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
