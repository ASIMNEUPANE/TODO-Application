import React, { useCallback } from "react";
import { useState } from "react";
function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const output = () => {
    console.log({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        placeholder="email"
      />

      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="text"
        placeholder="password"
      />
      <button onClick={output}>Button</button>
    </>
  );
}

export default Form;
