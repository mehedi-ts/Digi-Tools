import React from "react";
import user from "../../assets/user.png";
import pro from "../../assets/package.png";
import roc from "../../assets/rocket.png";

const Started = () => {
  return (
    <div className="bg-[#F9FAFC]">
      <div className="main-started border max-w-325 mx-auto pb-30 ">
        <div className="started-title text-center flex flex-col items-center gap-4 mb-10">
          <h1 className="text-[#101727] text-3xl md:text-5xl font-extrabold">
            Get Started in 3 Steps
          </h1>
          <p className="text-[#627382] text-base px-0.5 md:p-0">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="started-card flex px-2 md:px-0 flex-col md:flex-row items-center gap-7 ">
          <div className="card-main border p-6 bg-white border-[#F1F1F1] rounded-2xl">
            <div className=" flex items-center justify-end">
              <div className="count h-10 w-10 rounded-full bg-linear-to-r from-[#5337F6] to-[#9215FA] flex items-center justify-center">
                <span className="text-white text-sm font-bold">01</span>
              </div>
            </div>
            <div className="content-card text-center flex flex-col gap-4 items-center">
              <div className="img w-25 h-25 bg-[#F3E8FE] rounded-full flex items-center justify-center">
                <img src={user} alt="" />
              </div>
              <h3 className="text-[#101727] text-2xl font-bold">
                Create Account
              </h3>
              <p className="text-[#627382] text-base">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          <div className="card-main border p-6 bg-white border-[#F1F1F1] rounded-2xl">
            <div className=" flex items-center justify-end">
              <div className="count h-10 w-10 rounded-full bg-linear-to-r from-[#5337F6] to-[#9215FA] flex items-center justify-center">
                <span className="text-white text-sm font-bold">02</span>
              </div>
            </div>
            <div className="content-card text-center flex flex-col gap-4 items-center">
              <div className="img w-25 h-25 bg-[#F3E8FE] rounded-full flex items-center justify-center">
                <img src={pro} alt="" />
              </div>
              <h3 className="text-[#101727] text-2xl font-bold">
                Choose Products
              </h3>
              <p className="text-[#627382] text-base">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>
          <div className="card-main3 border p-6 bg-white  border-[#F1F1F1] rounded-2xl">
            <div className=" flex items-center justify-end">
              <div className="count h-10 w-10 rounded-full bg-linear-to-r from-[#5337F6] to-[#9215FA] flex items-center justify-center">
                <span className="text-white text-sm font-bold">03</span>
              </div>
            </div>
            <div className="content-card text-center flex flex-col gap-4 items-center">
              <div className="img w-25 h-25 bg-[#F3E8FE] rounded-full flex items-center justify-center">
                <img src={roc} alt="" />
              </div>
              <h3 className="text-[#101727] text-2xl font-bold">
                Start Creating
              </h3>
              <p className="text-[#627382] text-base">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Started;
