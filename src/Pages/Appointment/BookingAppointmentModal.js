import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingAppointmentModal = ({treatment,setTreatment, date}) => {
    const {_id,name, slots} = treatment;
    //automatic username r email ashar jonno
    const [user, loading, error] = useAuthState(auth);

    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(_id, slot,name);
        setTreatment(null);
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
            <input type="number" placeholder="Patient Age" className="input input-bordered input-secondary input-sm w-full max-w-xs mt-4" />
            <input type="text" placeholder="Phone Number" className="input input-bordered input-secondary input-sm w-full max-w-xs mt-4" />
            <br />
            <button type='submit' value="Book For" htmlFor="booking-modal" className="btn btn-secondary mt-5">Confirm Appointment</button>

            </form>
        </div>
        </div>
        </div>
    );
};

export default BookingAppointmentModal;