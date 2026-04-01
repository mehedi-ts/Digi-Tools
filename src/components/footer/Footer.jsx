import React from "react";
import facebookImg from "../../assets/products/Facebook.png";
import instaImg from "../../assets/products/Instagram.png";
import xImg from "../../assets/products/fi_5968958.png";

const Footer = () => {
  return (
    <div className="bg-[#101727] pt-30 pb-8">
      <div className="footer-main max-w-325 mx-auto flex flex-col gap-10">
        <footer className="footer sm:footer-horizontal px-2 md:px-0   text-white ">
          <aside className="w-[300px]">
            <h1 className="text-3xl font-bold">Digi Tools</h1>
            <p className="text-base">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Product</h6>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Templates</a>
            <a className="link link-hover">Integrations</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Press</a>
          </nav>
          <nav>
            <h6 className="footer-title">Resources</h6>
            <a className="link link-hover">Documentation</a>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Community</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title">Social Links</h6>
            <div className="flex items-center gap-3">
              <div className=" bg-white h-8 w-8 flex items-center justify-center rounded-full">
                <img src={facebookImg} alt="" />
              </div>
              <div className=" bg-white h-8 w-8 flex items-center justify-center rounded-full">
                <img src={instaImg} alt="" />
              </div>{" "}
              <div className=" bg-white h-8 w-8 flex items-center justify-center rounded-full">
                <img src={xImg} alt="" />
              </div>
            </div>
          </nav>
        </footer>
        <footer className="footer sm:footer-horizontal  text-white items-center p-4 border-t border-[#b2b0b0df]">
          <aside className="grid-flow-col items-center text-center">
            <p className="text-center">
              CopyrighT © {new Date().getFullYear()} - All right reserved
            </p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a>Privacy Policy</a>
            <a>Privacy Policy</a>
            <a>Privacy Policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
