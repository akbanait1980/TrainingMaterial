import React from "react";

const Person = () => {
  const names = ["mark", "paul", "watson", "john", "rangel"];
  return (
    <div>
      <h1>List of Names</h1>
      <ul>
        {/* <li>{ names[0] }</li>
                <li>{ names[1] }</li>
                <li>{ names[2] }</li> */}
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Person;
