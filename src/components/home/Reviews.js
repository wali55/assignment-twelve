import React from "react";
import review1 from "../../image/review1.png";
import review2 from "../../image/review2.png";
import review3 from "../../image/review3.png";

const Reviews = () => {
  return (
    <div className="mt-[200px] mb-[100px]">
      <h2 className="font-bold text-4xl text-center text-[#0068B5]">
        Client Review's
      </h2>
      <p className="text-center mt-4">
        Intel's processor and other computer parts are loved by customers around
        the world.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 mx-auto mt-12">
        <div class="card max-w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <p className="italic">
              "I have been using intel parts for building our laptops. They are
              reliable and provide great performance."
            </p>
            <div className="flex items-center mt-6">
              <div class="avatar">
                <div class="w-16 rounded-full ring ring-[#0068B5] ring-offset-base-100 ring-offset-2">
                  <img src={review1} alt="person1" />
                </div>
              </div>
              <div className="ml-4">
                <h4>Andrew Baker</h4>
                <p>CEO, Dreamly</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card max-w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <p className="italic">
              "Intel is the really my first choice when I am thinking about computer parts. They have great quality and their customer service is also good."
            </p>
            <div className="flex items-center mt-6">
              <div class="avatar">
                <div class="w-16 rounded-full ring ring-[#0068B5] ring-offset-base-100 ring-offset-2">
                  <img src={review2} alt="person1" />
                </div>
              </div>
              <div className="ml-4">
                <h4>Bella Gill</h4>
                <p>CEO, FunMeets</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card max-w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <p className="italic">
              "Great quality product. Their parts have good performance. Our company has been using Intel's computer parts. Highly recommended."
            </p>
            <div className="flex items-center mt-6">
              <div class="avatar">
                <div class="w-16 rounded-full ring ring-[#0068B5] ring-offset-base-100 ring-offset-2">
                  <img src={review3} alt="person1" />
                </div>
              </div>
              <div className="ml-4">
                <h4>Robert Gibson</h4>
                <p>CEO, Vision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
