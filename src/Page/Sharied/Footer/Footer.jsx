import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer  grid grid-cols-2 lg:grid-cols-4 py-10  pl-10 bg-black text-white ">
        <div className="">
          <span className="footer-title font-bold text-white text-2xl">
            Meno links
          </span>
          <a className="link text-lg link-hover">About us</a>
          <a className="link text-lg link-hover">Contact</a>
          <a className="link text-lg link-hover">Jobs</a>
          <a className="link text-lg link-hover">Gallery pic</a>
        </div>
        <div className=" ">
          <span className=" footer-title font-bold text-white text-2xl ">
            Services
          </span>
          <a className="link text-lg  link-hover">Branding</a>
          <a className="link text-lg  link-hover">Design</a>
          <a className="link text-lg  link-hover">Marketing</a>
          <a className="link text-lg  link-hover">Advertisement</a>
        </div>

        <div className=" ">
          <span className="footer-title font-bold text-white text-2xl">
            Contact
          </span>
          <a className="link text-lg link-hover">
            Address: 123 Main Street, City, Country
          </a>
          <a className=" text-lg link-hover">Phone: +1 123-456-7890</a>
          <a className=" text-lg link-hover">Email: info@example.com</a>
        </div>
        <div className=" lg:pl-4">
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
        <div className="place-self-center justify-center items-center flex ">
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.twitter.com" target="_blank">
              <FaTwitter className="h-8 w-8 hover:text-[#f65829]  text-white" />
            </a>

            <a href="https://www.youtube.com" target="_blank">
              <FaYoutube className="h-8 w-8 hover:text-[#f65829] text-white" />
            </a>

            <a href="https://www.instagram.com" target="_blank">
              <FaInstagram className="h-8 w-8 hover:text-[#f65829] text-white" />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <FaFacebook className="h-8 w-8  hover:text-[#f65829] text-white" />
            </a>
          </div>
        </div>
        <p className="text-white text-center pt-1">
          Copyright © 2023 - All right reserved by Car World LTD
        </p>
      </footer>
    </div>
  );
};

export default Footer;
