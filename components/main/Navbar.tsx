import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin ,FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
        

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Bhavya Kashmira
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
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
        </div>

      
        <div className=' flex w-[120px] h-[50px]'>
          <div className="mt-[10px] gap-[10px] flex justify-center">
            <a href="https://github.com/bhavyakashmira">
              <FaGithub style={{ fontSize: '2em' , color:'white' }} />
            </a>
            <a href="https://www.linkedin.com/in/bhavyakashmira/">
              <FaLinkedin style={{ fontSize: '2em', color:'white' }} />
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
