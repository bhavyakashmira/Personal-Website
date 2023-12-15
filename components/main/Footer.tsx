import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
      <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] " >
       
            <div className="font-bold text-[16px] mt-[20px] flex justify-center">Contact with me</div>
            <div className="justify-center mt-[20px] flex gap-[20px]">
            <a href="https://github.com/bhavyakashmira">
                <FaGithub style={{ fontSize: '2em', color: 'white', cursor:'pointer' }} />
             </a>
                      <a href="https://www.linkedin.com/in/bhavyakashmira/">
                          <FaLinkedin style={{ fontSize: '2em', color: 'white' }} />
                      </a>
                      <a href="https://twitter.com">
                          <FaTwitter style={{ fontSize: '2em', color: 'white' }} />
                      </a>
                      <a href="https://twitter.com">
                          <CgMail style={{ fontSize: '2em', color: 'white' }} />
                      </a>
          </div>
          
    </div>

  )
}

export default Footer