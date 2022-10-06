import React from "react";

const Employee = (props) => {
  const { id, name, email } = props.data;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
};
export default Employee;
