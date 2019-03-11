import React from "react";

export default function ActorImages({ src }) {
  return (
    <img
      className="ui medium rounded image"
      src={require(`../pics/${src}.jpg`)}
      alt={src}
    />
  );
}
