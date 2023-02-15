import React from "react";

const Part = ({ part }) => {
  const { name, img, description, minOrderQuantity, availableQuantity, price } =
    part;

  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="parts" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {name}</h2>
        <p className="my-3">{description}</p>
        <p><span className="font-semibold">Minimum Order:</span> {minOrderQuantity}</p>
        <p><span className="font-semibold">Available Quantity:</span> {availableQuantity}</p>
        <p><span className="font-semibold">Price:</span> {price}</p>
      </div>
    </div>
  );
};

export default Part;
