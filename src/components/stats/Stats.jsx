import React from "react";

const Stats = () => {
  return (
    <div className="bg-linear-to-r from-[#5337F6] to-[#9215FA] py-15  ">
      <div className="main-stats max-w-325 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-3 w-full">
          <h3 className="text-white text-6xl font-extrabold">50K+</h3>
          <p className="text-white text-2xl font-medium">Active Users</p>
        </div>
        <div className="divider lg:divider-horizontal before:bg-white after:bg-white"></div>
        <div className="flex flex-col items-center justify-center gap-3 w-full ">
          <h3 className="text-white text-6xl font-extrabold">200+</h3>
          <p className="text-white text-2xl font-medium">Premium Tools</p>
        </div>
        <div className="divider lg:divider-horizontal before:bg-white after:bg-white"></div>

        <div className="flex flex-col items-center justify-center gap-3 w-full ">
          <h3 className="text-white text-6xl font-extrabold">4.9</h3>
          <p className="text-white text-2xl font-medium">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
