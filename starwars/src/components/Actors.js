import React from "react";
import ActorImages from "./ActorImages";

export default function Actors({ name, birth, gender, height, mass }) {
  console.log(name);
  return (
    <div style={{ width: "500px" }} className="ui card">
      <div className="image">
        <ActorImages src={name} />
      </div>
      <div className="content">
        <h1 className="Header">{name}</h1>
        <div className="meta">
          <span className="date">Born in: {birth}</span>
        </div>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
      </div>
    </div>
  );
}

{
  /* <i class="film icon" />; */
}
