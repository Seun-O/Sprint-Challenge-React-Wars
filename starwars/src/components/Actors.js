import React from "react";

export default function Actors({ name, birth, gender, height, mass }) {
  return (
    <div className="ui centered card">
      <div className="image">
        <img src="../pics/LukeSkywalker.jpg" alt={name} />
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
