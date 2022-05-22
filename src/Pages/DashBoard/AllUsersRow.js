import React from "react";
import Swal from "sweetalert2";

const AllUsersRow = ({user, index, refetch }) => {
  const { email, role } = user;
  // for make an admin
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          Swal.fire({
            icon: "error",
            title: "You are not an Admin",
          });
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            icon: "success",
            title: "Successfully Made an Admin",
          });
        }
      });
  };

  const deleteUser = email => {
    fetch(`http://localhost:5000/user/${email}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
})
.then(res => res.json())
.then(data => {
    console.log(data);
    if (data.deletedCount) {
        Swal.fire({
            icon: 'success',
            title: 'Delete Successfully'
        })
        refetch();
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Cancel Successfully'
        })
    }
})
}

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user.patientName}</td>
      <td>{user.email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={()=>makeAdmin(email)} className="btn btn-xs btn-warning">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button onClick={()=> deleteUser(email)} className="btn btn-xs btn-error">Remove User</button>
      </td>
    </tr>
  );
};

export default AllUsersRow;
