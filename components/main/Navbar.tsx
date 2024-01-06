import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin ,FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (

    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full h-full flex flex-row items-center justify-between mx-auto px-4 md:px-10">
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <span className="font-bold ml-2 hidden md:block text-gray-300">
            Bhavya Kashmira
          </span>
        </a>

        <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] md:mr-4 lg:mr-20 px-2 sm:px-4 md:px-6 py-2 rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer">
            About me
          </a>
          <a href="#skills" className="cursor-pointer">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer">
            Projects
          </a>
        </div>

        <div className="flex items-center">
          <div className="flex gap-2 md:gap-4">
            <a href="https://github.com/bhavyakashmira">
              <FaGithub style={{ fontSize: '2em', color: 'white' }} />
            </a>
            <a href="https://www.linkedin.com/in/bhavyakashmira/">
              <FaLinkedin style={{ fontSize: '2em', color: 'white' }} />
            </a>
            <a href="https://twitter.com">
              <FaTwitter style={{ fontSize: '2em', color: 'white' }} />
            </a>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Navbar;
