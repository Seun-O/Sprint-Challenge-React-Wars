import React, { Component } from "react";
import "./App.css";
import ActorList from "./components/ActorList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: "",
      prev: ""
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          next: data.next,
          prev: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = () => {
    if (this.state.next === null) {
      return;
    } else {
      this.getCharacters(this.state.next);
    }
  };
  prevPage = () => {
    if (this.state.prev === null) {
      return;
    } else {
      this.getCharacters(this.state.prev);
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="ui buttons">
          <button
            className="ui left labeled icon button"
            onClick={this.prevPage}
          >
            <i className="left chevron icon" />
            Prev
          </button>
          <button
            className="ui right labeled icon button"
            onClick={this.nextPage}
          >
            <i className="right chevron icon" />
            Next
          </button>
        </div>
        <ActorList actors={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
