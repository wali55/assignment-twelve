import React from "react";
import cardCPU from "../../image/cardCPU.png";
import cardGPU from "../../image/cardGPU.png";
import cardSSD from "../../image/cardSSD.png";
import Part from "./Part";

const Parts = () => {
  const parts = [
    {
      _id: 1,
      name: "Processors",
      description: "Intel's highest performance CPUs for laptops and desktops.",
      img: cardCPU,
      minOrderQuantity: 100,
      availableQuantity: 1000,
      price: 750,
    },
    {
      _id: 2,
      name: "Graphics",
      description: "Intel® Arc™ graphics in action on popular games from the AAA hits to fast-paced esports.",
      img: cardGPU,
      minOrderQuantity: 50,
      availableQuantity: 500,
      price: 450,
    },
    {
      _id: 3,
      name: "SSDs",
      description: "Solid State Drives (SSD) dramatically increase performance and overall system responsiveness",
      img: cardSSD,
      minOrderQuantity: 150,
      availableQuantity: 1500,
      price: 250,
    },
  ];

  return (
    <div className="mt-28">
      <div className="text-center">
        <h3 className="font-bold text-2xl text-[#0068B5]">OUR PRODUCTS</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 mx-auto mt-12">
        {
            parts.map(part => <Part
            key={part._id}
            part={part}
            ></Part>)
        }
      </div>
    </div>
  );
};

export default Parts;
