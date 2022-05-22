import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {id} = useParams();

    return (
        <div>
            <h1 className='text-2xl text-orange-600 font-semibold uppercase p-3'>Payment for: {id}</h1>
        </div>
    );
};

export default Payment;