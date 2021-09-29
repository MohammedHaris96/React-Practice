import React from "react";
import { useState } from "react";

const State = () => {
  debugger;
  const [message, setMessage] = useState();

  const displayText = () => {
    setMessage("Hello, how are you doing?");
  };

  return (
    <div>
      <h1>{setMessage}</h1>
      <button onClick={displayText} >Check</button>
    </div>
  );
};

export default State;
