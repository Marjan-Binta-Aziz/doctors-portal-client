import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import DeleteDoctorModal from './DeleteDoctorModal';
import DoctorsRow from './DoctorsRow';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const {data: doctors, isLoading,refetch} = useQuery('doctors',()=> fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    )

        if (isLoading) {
            return <Loading></Loading>
        }

    return (
        <div>
            <h1>Manage Doctor: {doctors.length}</h1>
            <div className="overflow-x-auto">
        <table className="table table-zebra w-full ">
            <thead className="text-center">
                <tr>
                <th></th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
                <th>Specialty</th>
                <th>Action</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {doctors.map((doctor, index) => (
                <DoctorsRow
                    key={doctor._id}
                    doctor={doctor}
                    index={index}
                    setDeletingDoctor={setDeletingDoctor}
                    refetch={refetch}
                ></DoctorsRow>
                ))}
            </tbody>
            </table>
        </div>
        {deletingDoctor && <DeleteDoctorModal
                deletingDoctor={deletingDoctor}
                refetch={refetch}
                setDeletingDoctor={setDeletingDoctor}
            ></DeleteDoctorModal>}
        </div>
    );
};

export default ManageDoctors;