import React from 'react';
import Swal from 'sweetalert2';

const DoctorsRow = ({doctor, index, refetch}) => {
    const {name, specialty, email, img} = doctor;

    const deleteDoctor = email => {
        fetch(`http://localhost:5000/doctor/${email}`, {
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
        <tr key={doctor._id}>
        <th>{index + 1}</th>
        <th><div class="avatar">
        <div class="w-14 mask mask-squircle">
            <img src={img} alt={name} />
        </div>
        </div></th>
        <td>{name}</td>
        <td>{specialty}</td>
        <td>{email}</td>
        <td>
        <button onClick={()=> deleteDoctor(email)} className="btn btn-xs btn-error">Remove Doctor</button>
        </td>
    </tr>
    );
};

export default DoctorsRow;