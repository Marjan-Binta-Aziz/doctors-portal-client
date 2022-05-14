import React from "react";

const AvailaibleAppoinment = ({appointment, setTreatment}) => {
    const {name, slots} = appointment 
    return (
        <div>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
            <h2 className="text-center text-2xl font-bold">{name}</h2>
            <p>
                {
                slots.length > 0
                ? <span>{slots[0]}</span>
                : <span className="text-red-500">NO SlOTS AVAILABLE FOR TODAY</span>
                }
            </p>
            <p className="font-semibold">Available {slots.length} {slots.length > 1 ? 'Spaces' : 'Space'}</p>
            <div className="card-actions justify-center">
            <label onClick={()=> setTreatment(appointment)}
            htmlFor="booking-modal" 
            className="btn btn-secondary uppercase " disabled={slots.length === 0}>
                Book Appointment
            </label>
            </div>
            </div>
        </div>
        </div>
    );
};

export default AvailaibleAppoinment;
