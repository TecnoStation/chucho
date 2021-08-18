import React from "react";
import Member from "./Member";

export default function TeamMembers({ data, removeFact }) {
  return (
    <ul>
      {data.map((fact) => (
        <Member key={fact.id} fact={fact} removeFact={removeFact} />
      ))}
    </ul>
  );
}
