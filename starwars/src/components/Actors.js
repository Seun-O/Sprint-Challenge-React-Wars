import React from "react";
import ActorImages from "./ActorImages";

export default function Actors({ name, birth, gender, height, mass, films }) {
  return (
    <div style={{ width: "800px" }} className="ui centered card">
      <div className="image">
        <ActorImages src={name} />
      </div>
      <div className="content">
        <h1 className="Header">{name}</h1>
        <div className="meta">
          <span className="date">Born in: {birth}</span>
        </div>
        <div className="description">
          <p>
            <span className="prop">Gender</span>: {gender}
          </p>
          <p>
            <span className="prop">Height:</span> {height}
          </p>
          <p>
            <span className="prop">Mass:</span> {mass}
          </p>
        </div>
      </div>
      <div className="extra content">
        <i className="film icon" /> {films} films
      </div>
    </div>
  );
}
