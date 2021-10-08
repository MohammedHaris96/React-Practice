import React from "react";

const Hello = ({ name, hobbies }) => {
  return (
    <div>
      <h2 style={{ color: "lightgreen" }}>
        Hello, {name} knows {hobbies}
      </h2>
    </div>
  );
};

export default Hello;
