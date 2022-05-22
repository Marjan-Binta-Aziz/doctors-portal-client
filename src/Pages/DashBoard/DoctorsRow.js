import React from 'react';
import Swal from 'sweetalert2';

const DoctorsRow = ({doctor, index, refetch,setDeletingDoctor}) => {
    const {name, specialty, email, img} = doctor;

    /* const deleteDoctor = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
    })
    .then(res => res.json())

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
      })
    .then(data => {
        console.log(data);

        if (data.deletedCount) {
            swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success',
            )
            refetch();
            console.log('Confirm Delete',data.isConfirmed);
        }else if(
            data.dismiss === Swal.DismissReason.cancel
            ){
            swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
            )
            refetch();
            console.log('Dismiss',data.dismiss);
        }
    })
    } */


    return (
        <tr key={doctor._id}>
        <th>{index + 1}</th>
        <th><div className="avatar">
        <div className="w-8 mask mask-squircle">
            <img src={img} alt={name} />
        </div>
        </div></th>
        <td>{name}</td>
        <td>{specialty}</td>
        <td>{email}</td>
        <td>
        <label onClick={()=> setDeletingDoctor(doctor)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Remove Doctor</label>
        </td>
    </tr>
    );
};

export default DoctorsRow;