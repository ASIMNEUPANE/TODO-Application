import React from "react";

export default function Car(props) {
  const shoot = () => {
    const input = document.getElementById("text")?.value || "sasasasas";
    alert(`goallsss..By ${input}`);
  };

  return (
    <div>
      Color of car is {props.color} and it has {props.wheels}
      <br />
      <input type="text" id="text" />
      <button onClick={() => shoot()}>shoot</button>
     
    </div>
    
    
  );
}
