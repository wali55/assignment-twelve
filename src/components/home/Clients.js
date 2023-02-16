import React from "react";
import hp from "../../image/hp.png";
import dell from "../../image/dell.png";
import asus from "../../image/asus.png";
import acer from "../../image/acer.png";
import lenovo from "../../image/lenovo.png";

const Clients = () => {
  return (
    <div className="mt-[200px]">
      <h2 className="font-bold text-4xl text-center text-[#0068B5]">
        Our Clients Around The World
      </h2>
      <div className="flex flex-wrap w-10/12 mx-auto gap-32 mt-12 justify-center items-center">
        <img style={{ width: "50px", height: "50px" }} src={hp} alt="hp" />
        <img style={{ width: "50px", height: "50px" }} src={dell} alt="dell" />
        <img style={{ width: "80px" }} src={asus} alt="asus" />
        <img style={{ width: "70px" }} src={acer} alt="acer" />
        <img style={{ width: "90px" }} src={lenovo} alt="lenovo" />
      </div>
    </div>
  );
};

export default Clients;
