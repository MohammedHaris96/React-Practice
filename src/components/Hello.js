import React from "react";

const Hello = ({ name, hobbies }) => {
  return (
    <div>
      <h2 style={{ color: "green" }}>
        Hello, {name} knows {hobbies}
      </h2>
    </div>
  );
};

export default Hello;
