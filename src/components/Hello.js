import React from "react";

const Hello = ({ name, hobbies }) => {
  return (
    <div>
      <h2>
        Hello, {name} knows {hobbies}
      </h2>
    </div>
  );
};

export default Hello;
