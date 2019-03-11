import React from "react";
import Actors from "./Actors";

export default function ActorList({ actors }) {
  return (
    <div>
      {actors.map(actor => {
        return (
          <Actors
            name={actor.name}
            birth={actor["birth_year"]}
            mass={actor.mass}
            height={actor.height}
            gender={actor.gender}
          />
        );
      })}
    </div>
  );
}
