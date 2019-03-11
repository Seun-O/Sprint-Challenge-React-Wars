import React, { Component } from "react";
import Actors from "./Actors";

class ActorList extends Component {
  render() {
    return (
      <div className="actor-container">
        {this.props.actors.map((actor, i) => {
          return (
            <Actors
              key={i}
              name={actor.name}
              birth={actor["birth_year"]}
              mass={actor.mass}
              height={actor.height}
              gender={actor.gender}
              films={actor.films.length}
            />
          );
        })}
      </div>
    );
  }
}

export default ActorList;
