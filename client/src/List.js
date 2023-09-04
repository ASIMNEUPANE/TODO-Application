import React from "react";

export default function List({ cars }) {
  return (
    <div>
      <b> List</b>
      <ol>
        {cars &&
          cars.length > 0 &&
          cars.map((car, index) => {
            return <li key={index}>{car}</li>;
          })}
      </ol>
    </div>
  );
}
