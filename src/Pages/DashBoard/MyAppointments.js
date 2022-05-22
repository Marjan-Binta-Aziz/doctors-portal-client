import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [user] = useAuthState(auth);
  const [myAppointments, setMyAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?email=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setMyAppointments(data);
        });
    }
  }, [user]);
  return (
    <div>
      <h2 className="p-3 text-center text-2xl">
        Your Total Appointments: {myAppointments.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Time</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myAppointments.map((myAppointment, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{myAppointment.name}</td>
                <td>{myAppointment.treatment}</td>
                <td>{myAppointment.slot}</td>
                <td>{myAppointment.date}</td>
                <td>
                  <button className="btn btn-xs">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
