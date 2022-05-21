import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import AllUsersRow from "./AllUsersRow";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery("all-user", () =>
    fetch("https://secure-shelf-72939.herokuapp.com/all-user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h3>All Users: {users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full ">
          <thead className="text-center">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <AllUsersRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></AllUsersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
