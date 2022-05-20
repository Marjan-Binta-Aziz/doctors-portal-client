import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [user] = useAuthState(auth);
    const [myAppointments, setMyAppointments] = useState([]);


    useEffect(()=>{
        if (user) {
        fetch(`http://localhost:5000/booking?patientEmail=${user.email}`)
        .then(res => res.json())
        .then(data => setMyAppointments(data))
        }

    },[user])
    return (
        <div>
            <h2 className='p-3 text-center text-2xl'>Your Total Appointments: {myAppointments.length}</h2>
            <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
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
                {
                    myAppointments.map((myAppointment, index) => <tr>
                        <th>{index + 1}</th>
                        <td>{myAppointment.patientName}</td>
                        <td>{myAppointment.treatment}</td>
                        <td>{myAppointment.slot}</td>
                        <td>{myAppointment.date}</td>
                        <td><button class="btn btn-xs">Delete</button>
</td>
                    </tr> )
                }
            </tbody>
        </table>
</div>
    </div>
    );
};

export default MyAppointments;