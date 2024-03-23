import { Divider } from "@chakra-ui/react";
import logo from "../assets/images/ins-logo.png";
import {
  FaFacebookSquare,
  FaGooglePlus,
  FaPinterestSquare,
} from "react-icons/fa";
import { FaSquareTwitter, FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className=' max-w-7xl mx-auto px-5 py-20'>
      <Divider />
      <div className=' flex flex-col md:flex-row space-y-5 justify-between items-center'>
        <div className=' flex items-center justify-center md:justify-start space-x-2 w-full'>
          <img src={logo} alt='' className=' w-20' />
          <p className=' font-bold text-xl uppercase text-blue-600 tracking-wider'>
            Instrumental
          </p>
        </div>
        <div className=' flex  gap-x-5'>
          <a
            href='/hiremaster/google'
            className=' hover:text-blue-400 text-blue-600'
          >
            <FaGooglePlus className=' text-3xl' />
          </a>
          <a
            href='/hiremaster/instagram'
            className=' hover:text-blue-400 text-blue-600'
          >
            <FaInstagram className=' text-3xl' />
          </a>
          <a
            href='/hiremaster/facebook'
            className=' hover:text-blue-400 text-blue-600'
          >
            <FaFacebookSquare className=' text-3xl' />
          </a>
          <a
            href='/hiremaster/pinterest'
            className=' hover:text-blue-400 text-blue-600'
          >
            <FaPinterestSquare className=' text-3xl' />
          </a>
          <a
            href='/hiremaster/twitter'
            className=' hover:text-blue-400 text-blue-600'
          >
            <FaSquareTwitter className=' text-3xl' />
          </a>
        </div>
      </div>
      <p className=' text-center font-medium text-gray-500 py-5'>
        Copyright &copy; 2024 - All right reserved.
      </p>
      <Divider />
    </div>
  );
};

export default Footer;
