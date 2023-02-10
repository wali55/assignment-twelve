import React from "react";
import processor from "../../image/processor.jpg";
import gpu from "../../image/gpu.jpg";
import ssd from "../../image/ssd.jpg";

const Banner = () => {
  return (
    <div class="carousel w-full">
      <div id="slide1" class="carousel-item relative w-full">
        <img
          src={processor}
          class="w-full h-screen"
        />
        <h2 className="text-4xl font-bold text-white absolute top-32 left-8">Processor</h2>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img
          src={gpu}
          class="w-full h-screen"
        />
        <h2 className="text-4xl font-bold text-white absolute top-32 left-8">Graphics</h2>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img
          src={ssd}
          class="w-full h-screen"
        />
        <h2 className="text-4xl font-bold text-white absolute top-32 left-8">Storage</h2>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
