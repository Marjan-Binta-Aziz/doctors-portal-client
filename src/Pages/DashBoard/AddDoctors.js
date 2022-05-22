import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import Loading from '../../Shared/Loading';

const AddDoctors = () => {
    const {register,formState: { errors },handleSubmit, reset} = useForm();

        // for image storage
        const imgStorageKey = '79400c50a495583eef49533f81104895'


    const {data: appointments, isLoading} = useQuery('appointment', ()=> fetch('http://localhost:5000/appointment').then(res => res.json()))

    const onSubmit = async (data) => {
        console.log(data);
        // for image
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=> res.json())
        .then(result => {
            if (result.success) {
                const img = result.data.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    details: data.details,
                    img: img
                }
                //send to database
                fetch('http://localhost:5000/doctor', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(inserted => {
                    if (inserted.insertedId) {
                        Swal.fire({
                            icon: "success",
                            title: "New Doctor Added",
                            text: `${data.name}`,
                        })
                        reset();
                    } else{
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                        })
                    }
                    console.log(inserted);
                })
            }
            console.log('Image bb= ',result);
        })
    };

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <h2 className='text-3xl p-3 text-center'>Add A Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-actions justify-center" >

                <input
                    type="name"
                    className="input input-bordered input-secondary input-md w-full max-w-xs mt-2"
                    placeholder="Full Name "
                    {...register("name", { required: true })}
                />

                {errors.name?.type === "required" && (
                    <p className=" m-0 text-red-600">Name is required</p>
                )}

            
                <input
                    type="email"
                    placeholder="Email Address"
                    className="input input-bordered input-secondary input-md w-full max-w-xs mt-2"
                    {...register("email", {
                    required: {
                        value: true,
                        message: "Email required",
                    },
                    pattern: {
                        value: "^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$",
                        message: "Please Provide Valied Email",
                    },
                    })}
                />

                <>
                    {errors.email?.type === "required" && (
                    <p className="m-0 text-red-600">{errors.email.message}</p>
                    )}
                    {errors.email?.type === "pattern" && (
                    <p className="m-0 text-red-600">{errors.email.message}</p>
                    )}
                </>

                <select {...register("specialty", {
                    required: {
                        value: true,
                        message: "Specialization Required",
                    },
                })}class="select select-success w-full max-w-xs">
                    {
                        appointments.map(appointment=><option
                            key={appointment._id}
                            value={appointment.name}
                        >   
                        {appointment.name}</option>
                        )
                        
                    }
                    
                    </select>

                <textarea 
                    {...register("details")}
                    type="textarea"
                    placeholder="Details"
                    className="textarea textarea-success input-md w-full max-w-xs mt-2"
                />

                <>
                    {errors.details?.type === "required" && (
                    <p className="m-0 text-red-600">{errors.details.message}</p>
                    )}
                    
                </>


                <input
                    type="file"
                    className="input input-bordered input-secondary input-md w-full max-w-xs mt-2"
                    placeholder="Image"
                    {...register("image", { required: true })}
                />

                {errors.image?.type === "required" && (
                    <p className=" m-0 text-red-600">Name is required</p>
                )}

                <button
                    type="submit"
                    className="btn btn-secondary w-full mt-5 bg-gradient-to-r from-cyan-400 to-blue-200"
                >
                    Add Doctor
                </button>
                </form>
        </div>
    );
};

export default AddDoctors;