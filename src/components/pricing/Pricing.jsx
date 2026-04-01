import React from "react";

const Pricing = () => {
  return (
    <div>
      <div className="pricing-main border max-w-325 mx-auto pb-30">
        <div className="pricing-title text-center flex flex-col items-center gap-4 mb-10">
          <h1 className="text-[#101727] text-3xl md:text-5xl font-extrabold">
            Simple, Transparent Pricing
          </h1>
          <p className="text-[#627382] text-base px-0.5 md:px-0">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="pricing-cards grid grid-cols-1 px-2 md:px-0 gap-8 md:grid-cols-3 place-items-center">
          <div className="card w-full h-full bg-base-100 shadow-sm border border-[#F2F2F2] p-6 rounded-2xl">
            <div className="contant h-full flex flex-col gap-4">
              <h3 className="font-bold text-2xl text-[#101727]">Starter</h3>
              <p className="text-base text-[#627382]">
                Perfect for getting started
              </p>
              <p className="text-base text-[#627382]">
                <span className="font-bold text-2xl text-[#101727]">0$</span>
                /month
              </p>
              <ul className=" flex flex-col gap-2 flex-1   text-base text-[#627382]">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Access to 10 free tools</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Basic templates</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Community support</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>1 project per month</span>
                </li>
              </ul>
              <div className="bt">
                <button className="btn btn-primary w-full rounded-full py-3 px-4 bg-linear-to-r from-[#5337F6] to-[#9215FA] ">
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
          <div className="card h-full w-full bg-base-100 shadow-sm border border-[#F2F2F2] p-6 bg-linear-to-r from-[#5337F6] to-[#9215FA] text-white rounded-2xl">
            <div className="contant h-full flex flex-col gap-4">
              <h3 className="font-bold text-2xl text-[#ffffff]">Pro</h3>
              <p className="text-base text-[#ffffff]">Best for professionals</p>
              <p className="text-base text-[#627382]">
                <span className="font-bold text-2xl text-[#ffffff]">$29</span>
                /month
              </p>
              <ul className=" flex flex-col flex-1 gap-2  text-base text-[#ffffff]">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Access to all premium tools</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Unlimited templates</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Priority support</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Unlimited projects</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Cloud sync</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Advanced analytics</span>
                </li>
              </ul>
              <div className="bt">
                <button className="btn btn-primary w-full rounded-full py-3 px-4 bg-white ">
                  <p className="bg-linear-to-r from-[#5337F6] to-[#9215FA] bg-clip-text text-transparent">
                    Get Started Free
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="card h-full w-full bg-base-100 shadow-sm border border-[#F2F2F2] p-6 rounded-2xl ">
            <div className="contant h-full flex flex-col gap-4">
              <h3 className="font-bold text-2xl text-[#101727]">Enterprise</h3>
              <p className="text-base text-[#627382]">
                For teams and businesses
              </p>
              <p className="text-base text-[#627382]">
                <span className="font-bold text-2xl text-[#101727]">99$</span>
                /month
              </p>
              <ul className=" flex flex-col flex-1 gap-2  text-base text-[#627382]">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Everything in Pro</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Team collaboration</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Custom integrations</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Dedicated support</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>SLA guarantee</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Custom branding</span>
                </li>
              </ul>
              <div className="bt">
                <button className="btn btn-primary w-full rounded-full py-3 px-4 bg-linear-to-r from-[#5337F6] to-[#9215FA]">
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
