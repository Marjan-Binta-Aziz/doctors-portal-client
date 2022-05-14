import React from "react";

const Service = ({ service }) => {
  return (
    <div className="card w-100 bg-base-100 shadow-xl pt-8">
      <figure >
        <img className="w-fit p-2" src={service.img} alt="#" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title ">
          {service.name}
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default Service;
