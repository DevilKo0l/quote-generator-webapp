import React from "react";
import axios from "axios";

import "./App.css";
class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice: advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app flex__center app__wrapper">
        <div className="app-card flex__center">
          <h1 className="app-card__heading flex__center">{advice}</h1>
        </div>

        <button className="button flex__center" onClick={this.fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    );
  }
}

export default App;
