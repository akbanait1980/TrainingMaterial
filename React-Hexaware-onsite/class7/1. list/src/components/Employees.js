import React from "react";
import Employee from "./Employee";

const Employees = () => {
  const employeeData = [
    { id: 1, name: "Mark", email: "m@gmail.com" },
    { id: 2, name: "Paul", email: "p@gmail.com" },
    { id: 3, name: "John", email: "j@gmail.com" },
    { id: 4, name: "Smith", email: "s@gmail.com" },
    { id: 5, name: "Watson", email: "w@gmail.com" },
  ];

  return (
    <div>
      <h1>All Employees</h1>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Emai</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((item) => (
            <Employee key={ item.id} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Employees;
