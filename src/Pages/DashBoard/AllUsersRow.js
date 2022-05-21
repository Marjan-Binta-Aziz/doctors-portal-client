import React from 'react';
import Swal from 'sweetalert2';

const AllUsersRow = ({user,index, refetch}) => {
    const {email, role} = user;
     // for make an admin
const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`,{
        method: 'PUT',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        refetch();
        Swal.fire({
            icon: 'success',
            title: 'Successfully Made an Admin',
            })
    })
}

    return (
        <tr 
                    key={user._id}
                    >
                        <th>{index + 1}</th>
                        <td>{user.patientName}</td>
                        <td>{user.email}</td>
                        <td>{role !== 'admin' &&<button onClick={makeAdmin} className="btn btn-xs btn-warning">Make Admin</button>}</td>
                        <td><button className="btn btn-xs btn-error">Remove User</button></td>
                    </tr>
    );
};

export default AllUsersRow;