import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import AvailaibleAppoinment from "./AvailaibleAppoinment";
import BookingAppointmentModal from "./BookingAppointmentModal";
import Loading from "../../Shared/Loading";

const AvailaibleAppoinments = ({ date, setDate }) => {
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");

  // featching data by reactQuery
  const {
    data: appointments,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(
      `https://secure-shelf-72939.herokuapp.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    <Loading></Loading>;
  }
  // --------------------------------------------------------
  /*  //Fetching by old style
        const [appointments, setAppointment] = useState([]);
        useEffect(() =>{
        fetch(`https://secure-shelf-72939.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json())
        .then(data => setAppointment(data))
    }, [formattedDate]) */

  return (
    <div>
      <h1 className="text-3xl text-center text-secondary font-bold">
        Available Appointment for <span>{format(date, "PP")}</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-7 pt-5 text-center">
        {appointments?.map((appointment) => (
          <AvailaibleAppoinment
            key={appointment._id}
            appointment={appointment}
            setTreatment={setTreatment}
          ></AvailaibleAppoinment>
        ))}
      </div>
      {treatment && (
        <BookingAppointmentModal
          treatment={treatment}
          setTreatment={setTreatment}
          date={date}
          refetch={refetch}
        ></BookingAppointmentModal>
      )}
    </div>
  );
};

export default AvailaibleAppoinments;
