import React, { Component } from "react";

class App extends Component {
  state = {
    inputs: ["fredjie", "salipow"],
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
    //console.log(this.state.players);
    return (
      <div className="container">
        <div className="col-xs-12">
          <h1>PLAYERS</h1>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                {this.state.loading && <p>Loading...</p>}
                {!this.state.loading &&
                  this.state.players[0].data.platformInfo
                    .platformUserIdentifier}
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
