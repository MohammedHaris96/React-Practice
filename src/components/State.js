import React from "react";
import { useState } from "react";

const State = () => {
  const [message, setMessage] = useState();

  return (
    <div>
      <h1>Hello how are you</h1>
      <button onClick={() => setMessage(message)}>Check</button>
    </div>
  );
};

export default State;
