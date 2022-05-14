import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailaibleAppoinment from './AvailaibleAppoinment';
import BookingAppointmentModal from './BookingAppointmentModal';

const AvailaibleAppoinments = ({date, setDate}) => {
    const [appointments, setAppointment] = useState([]);
    const [treatment, setTreatment] = useState(null)
    useEffect(() =>{
        fetch('http://localhost:5000/appointment')
        .then(res => res.json())
        .then(data => setAppointment(data))
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-center text-secondary font-bold'>Available Appointment for <span>{format(date, 'PP')}</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-7 pt-5 text-center'>
                {
                    appointments.map(appointment => <AvailaibleAppoinment
                        key={appointment._id}
                        appointment = {appointment}
                        setTreatment = {setTreatment}
                    ></AvailaibleAppoinment>
                    )
                }
            </div>
            {treatment && <BookingAppointmentModal
                treatment = {treatment}
                setTreatment = {setTreatment}
                date = {date}
            ></BookingAppointmentModal>}
        </div>
    );
};

export default AvailaibleAppoinments;