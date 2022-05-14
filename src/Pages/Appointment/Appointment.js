import React, { useState } from 'react';
import chair from "../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import AvailaibleAppoinments from './AvailaibleAppoinments';
import appBg from '../../assets/images/bg.png'

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div style={{
          background: `url(${appBg})`,
        }}
        >
            <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} alt="chair" className="max-w-md rounded-lg shadow-2xl"/>
          <div>
          <DayPicker 
          mode='single'
          selected={date}
          onSelect={setDate}
          />
        <p>You picked {format(date, 'PP')}</p>
          </div>
        </div>
      </div>
      <AvailaibleAppoinments date={date}></AvailaibleAppoinments>
        </div>
    );
};

export default Appointment;