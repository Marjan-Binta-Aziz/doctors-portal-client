import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import docBg from "../../assets/images/appointment.png";
const MakeAppoinment = () => {
  return (
    <section
      style={{
        background: `url(${docBg})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="hidden lg:block">
        <img src={doctor} alt="" />
      </div>
      <div className="p-6">
        <div>
          <h3 className="text-xl text-primary">Appoinment</h3>
          <h2 className="text-3xl text-white">Make an Apoinment for Today</h2>
          <p className="text-white pt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            delectus ipsum adipisci odit odio ducimus magnam! Fugit, laudantium.
            Et, tenetur magni. Quos at, ullam modi ab nihil est nulla illum?
          </p>
        </div>
        <div className="pt-8">
          <button className="btn btn-primary uppercase text-white bg-gradient-to-r from-cyan-500 to-blue-500 ">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoinment;
