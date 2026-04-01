import React from "react";
import bannerImg from "../../assets/banner.png";
import groupIcon from "../../assets/Group.svg";
import clickImg from "../../assets/play.png";

const Banner = () => {
  return (
    <div className="py-15">
      <div
        id="contant"
        className=" max-w-325 mx-auto flex flex-col md:flex-row items-center justify-between gap-15"
      >
        <div className="text-con flex flex-col text-center md:block md:text-left items-center  md:w-[50%]">
          <p className="bg-[#E1E7FF] font-medium text-base w-fit py-2 px-4 rounded-full flex items-center gap-1">
            <img src={groupIcon} alt="" />
            <span className="bg-linear-to-r from-[#5337F6] to-[#9215FA] bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </span>
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl  font-extrabold text-[#101727]  my-4">
            Supercharge Your Digital Workflow
          </h1>
          <p className="text-[18px] text-[#627382] ">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="btns mt-8 flex gap-4">
            <button className="btn rounded-full text-base font-semibold bg-linear-to-r from-[#5337F6] to-[#9215FA] text-white">
              Explore Products
            </button>
            <button className="btn border border-[#9215FA] btn-outline rounded-full text-base font-semibold flex items-center gap-1  ">
              <img src={clickImg} alt="" />
              <span className="bg-linear-to-r from-[#5337F6] to-[#9215FA] bg-clip-text text-transparent">
                Watch Demo
              </span>
            </button>
          </div>
        </div>
        <div className="img-con ">
          <img src={bannerImg} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
