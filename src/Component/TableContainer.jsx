import React from "react";
import { Button, Table } from "reactstrap";
const TableContainer = ({ data }) => {
  return (
    <div>
      <h1>Danh sách Account</h1>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>UserName</th>
            <th>Fullname</th>
            <th>Department</th>
            <th>Position</th>
            <th>CretateDate</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.email}</td>
              <td>{item.userName}</td>
              <td>{item.fullName}</td>
              <td>{item.department}</td>
              <td>{item.position}</td>
              <td>{item.CretateDate}</td>
              <td>
                <Button>Edit</Button>
              </td>
              <td>
                <Button>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableContainer;
