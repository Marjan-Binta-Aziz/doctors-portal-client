import React from "react";
import Info from "./Info";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const InfoCard = () => {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 pl-6">
      <Info
        cardTitle="Opening Time"
        bgClass="bg-gradient-to-r from-cyan-500 to-blue-500"
        img={clock}
      ></Info>
      <Info
        cardTitle="Our Location"
        bgClass="bg-secondary"
        img={marker}
      ></Info>
      <Info
        cardTitle="Contact Us"
        bgClass="bg-gradient-to-r from-cyan-500 to-blue-500"
        img={phone}
      ></Info>
    </div>
  );
};

export default InfoCard;
