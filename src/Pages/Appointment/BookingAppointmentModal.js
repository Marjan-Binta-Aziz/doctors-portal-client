import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';

const BookingAppointmentModal = ({treatment,setTreatment, date, refetch}) => {
    const {_id,name, slots} = treatment;
    //automatic username r email ashar jonno
    const [user, loading, error] = useAuthState(auth);

    //for sending date to database
    const formattedDate = format(date, 'PP');


    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            date:formattedDate,
            slot,
            patientName: user.displayName,
            gender: e.target.gender.value,
            email:user.email,
            patientAge : e.target.patientAge.value,
            phone: e.target.phone.value,
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Booked',
                    text: `You Booked for ${formattedDate} at ${slot}`,
                    })
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `Already have an appointment on ${formattedDate} at ${data.booking?.slot}`,
                    })
            }
            refetch();
        //close the module
        setTreatment(null);
        })
    }
    return (
        <div>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-center">
            <h3 className="font-bold text-lg">Booking For: {name}</h3>
            <label htmlFor="booking-modal" className="btn btn-secondary btn-sm btn-circle absolute right-2 top-2">✕</label>
            <form onSubmit={handleBooking}>
            <input type="text" value={format(date, 'PP')} placeholder="Patient Age" className="input input-bordered input-secondary input-sm w-fit max-w-xs mt-4" disabled/>
            <span>
            <select name='slot' className="select select-secondary w-fit max-w-xs select-sm ml-1">
            {
                slots.map((slot, index)=><option
                key={index}
                value={slot}
                >{slot}</option>)
            }
            </select>
            </span>
            <input type="text" value={user?.displayName} className="input input-bordered input-secondary input-sm w-full max-w-xs mt-4" disabled readOnly/>
            <input type="text" value={user?.email} className="input input-bordered input-secondary input-sm w-full max-w-xs mt-4" disabled readOnly/>
            <select name="gender" id="" className="select select-sm ml-1 input input-bordered input-secondary input-sm w-full max-w-xs mt-4">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <input type="number" name="patientAge" placeholder="Patient Age" className="input input-bordered input-secondary input-sm w-full max-w-xs mt-4" />
            <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered input-secondary input-sm w-full max-w-xs mt-4" />
            <br />
            <button type='submit' value="Book For" htmlFor="booking-modal" className="btn btn-secondary mt-5">Confirm Appointment</button>

            </form>
        </div>
    </div>
</div>
    );
};

export default BookingAppointmentModal;