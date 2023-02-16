import React from "react";
import { PresentationChartLineIcon } from "@heroicons/react/24/outline";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const BusinessSummary = () => {
  const achievements = [
    {
      _id: 1,
      name: "Market Capital",
      number: "$118.5B+",
      img: PresentationChartLineIcon,
    },
    {
      _id: 2,
      name: "Revenue",
      number: "$63.1B+",
      img: CurrencyDollarIcon,
    },
    {
      _id: 3,
      name: "Employees",
      number: "121,100+",
      img: UserGroupIcon,
    },
    {
      _id: 4,
      name: "Patents",
      number: "3,947+",
      img: CheckCircleIcon,
    },
  ];

  return (
    <div className="mt-[200px]">
      <h2 className="font-bold text-4xl text-center text-[#0068B5]">
        Business Summary 2023
      </h2>
      <p className="text-center mt-4">
        The company has business operations in China, Singapore, the US, and
        Taiwan. Intel is headquartered in Santa Clara, California, the US.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-10/12 mx-auto mt-12">
        <div class="card max-w-96 bg-base-100 shadow-xl text-center">
          <div class="card-body">
            <div className="flex justify-center">
              <PresentationChartLineIcon className="h-12 w-12 text-[#0068B5]" />
            </div>
            <h2 class="font-bold text-4xl">$118.5B+</h2>
            <p className="text-xl">Market Capital</p>
          </div>
        </div>
        <div class="card max-w-96 bg-base-100 shadow-xl text-center">
          <div class="card-body">
            <div className="flex justify-center">
              <CurrencyDollarIcon className="h-12 w-12 text-[#0068B5]" />
            </div>
            <h2 class="font-bold text-4xl">$63.1B+</h2>
            <p className="text-xl">Revenue</p>
          </div>
        </div>
        <div class="card max-w-96 bg-base-100 shadow-xl text-center">
          <div class="card-body">
            <div className="flex justify-center">
              <UserGroupIcon className="h-12 w-12 text-[#0068B5]" />
            </div>
            <h2 class="font-bold text-4xl">121,100+</h2>
            <p className="text-xl">Employees</p>
          </div>
        </div>
        <div class="card max-w-96 bg-base-100 shadow-xl text-center">
          <div class="card-body">
            <div className="flex justify-center">
              <CheckCircleIcon className="h-12 w-12 text-[#0068B5]" />
            </div>
            <h2 class="font-bold text-4xl">3,947+</h2>
            <p className="text-xl">Patents</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
