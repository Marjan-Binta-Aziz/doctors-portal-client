import React from "react";

const Reviews = ({ review }) => {
  return (
    <div>
      <div className="card w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{review.review}</p>
          <div className="flex pt-4">
            <div className="avatar">
              <div className="w-14 mr-5 rounded-full ring ring-primary">
                <img src={review.img} alt="" />
              </div>
            </div>
            <div>
              <h1>{review.name}</h1>
              <p>{review.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
