import React from "react";
import "./style.css";

const Users = ({ user }) => {
  return (
    <tr className="tr">
      <td>
        <img alt={user.name.first} src={user.picture.thumbnail} />
      </td>
      <td>
        {user.name.first} {user.name.last}
      </td>
      <td>{user.dob.age}</td>
      <td>{user.email}</td>
      <td>{user.phone} </td>
    </tr>
  );
};

export default Users;
