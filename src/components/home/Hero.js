import React from "react";
import hero from '../../image/hero.jpg';

const Hero = () => {
  return (
    <div>
      <div class="hero mt-[200px]">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={hero} alt="hero-img"
            class="max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">Intel Corporation <br />
            (commonly known as Intel)</h1>
            <p class="py-6">
            Intel Corporation is an American multinational corporation and technology company headquartered in Santa Clara, California. Robert Noyce and Gordon Moore founded Intel to create a company that would reflect their belief in continuous innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
