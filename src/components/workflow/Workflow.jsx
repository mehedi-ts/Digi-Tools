import React from "react";

const Workflow = () => {
  return (
    <div className="bg-linear-to-r from-[#5337F6] to-[#9215FA] py-30">
      <div className="workflow-main max-w-325 mx-auto">
        <div className="text text-center">
          <h1 className="mb-4 text-white text-[40px] font-extrabold">
            Ready to Transform Your Workflow?
          </h1>
          <p className="text-base text-white">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br />
            Start your free trial today.
          </p>
        </div>
        <div className="flex flex-col items-center mt-10">
          <div className="flex items-center gap-4 mb-4">
            <button className="btn px-4 py-3 rounded-full">
              Explore Products
            </button>
            <button className="btn px-4 py-3 rounded-full btn-outline text-white border-white">
              View Pricing
            </button>
          </div>
          <p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
