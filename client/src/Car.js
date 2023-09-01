import React from "react";

export default function Car(props) {
  const input = document.getElementById("text").value;
  const shoot = (name) => {
    alert(`goallsss..Bya ${name}`);
  };

  return (
    <div>
      Color of car is {props.color} and it has {props.wheels}
      <br />
      <input type="text" id="text" />
      <button onClick={() => shoot(input)}>shoot</button>
    </div>
  );
}
