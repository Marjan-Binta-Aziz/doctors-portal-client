import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data: myAppointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-full'>
            <div className="card bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {myAppointment.name}</p>
                    <h2 className="card-title">Please Pay for {myAppointment.treatment}</h2>
                    <p>Your Appointment: <span className='text-orange-700'>{myAppointment.date}</span> at {myAppointment.slot}</p>
                    <p>Please pay: ${myAppointment.price}</p>
                </div>
            </div>
            {/* <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm myAppointment={myAppointment} />
                    </Elements>
                </div>
            </div> */}
        </div>
    );
};

export default Payment;