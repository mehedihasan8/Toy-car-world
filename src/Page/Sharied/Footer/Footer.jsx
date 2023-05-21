import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer  grid grid-cols-2 lg:grid-cols-4 py-10  pl-10 bg-black text-white ">
        <div className="pl-6 lg:pl-16">
          <span className="footer-title font-bold text-white text-2xl">
            Meno links
          </span>
          <a className="link text-lg link-hover">About us</a>
          <a className="link text-lg link-hover">Contact</a>
          <a className="link text-lg link-hover">Jobs</a>
          <a className="link text-lg link-hover">Press kit</a>
        </div>
        <div className="pl-6 ">
          <span className=" footer-title font-bold text-white text-2xl ">
            Services
          </span>
          <a className="link text-lg  link-hover">Branding</a>
          <a className="link text-lg  link-hover">Design</a>
          <a className="link text-lg  link-hover">Marketing</a>
          <a className="link text-lg  link-hover">Advertisement</a>
        </div>

        <div className="pl-6 lg:pl-16">
          <span className="footer-title font-bold text-white text-2xl">
            Legal
          </span>
          <a className="link text-lg link-hover">Terms of use</a>
          <a className="link text-lg link-hover">Privacy policy</a>
          <a className="link text-lg link-hover">Cookie policy</a>
        </div>
        <div className="pl-6 lg:pl-16">
          <span className="footer-title font-bold text-white text-2xl">
            Information
          </span>
          <a className="link text-lg link-hover">Delivery information</a>
          <a className="link text-lg link-hover">Terms of use</a>
          <a className="link text-lg link-hover">Privacy policy</a>
          <a className="link text-lg link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer px-10 pb-16 pt-7  bg-black text-base-content border-base-300">
        <div className="place-self-center justify-center flex ">
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaTwitter className="h-8 w-8 hover:text-[#f65829]  text-white" />
            </a>
            <a>
              <FaYoutube className="h-8 w-8 hover:text-[#f65829] text-white" />
            </a>

            <a>
              <FaInstagram className="h-8 w-8 hover:text-[#f65829] text-white" />
            </a>
            <a>
              <FaFacebook className="h-8 w-8  hover:text-[#f65829] text-white" />
            </a>
          </div>
        </div>
        <p className="text-white">
          Copyright © 2023 - All right reserved by Food Lover LTD
        </p>
      </footer>
    </div>
  );
};

export default Footer;
