import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
      
      <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4 md:p-8 lg:p-12">
          <div className="font-bold text-lg md:text-xl lg:text-2xl mt-4 md:mt-8 lg:mt-12 flex justify-center">
              Contact with me
          </div>

          <div className="flex justify-center mt-4 md:mt-8 lg:mt-12 gap-4 md:gap-8">
              <a href="https://github.com/bhavyakashmira">
                  <FaGithub style={{ fontSize: '2em', color: 'white', cursor: 'pointer' }} />
              </a>
              <a href="https://www.linkedin.com/in/bhavyakashmira/">
                  <FaLinkedin style={{ fontSize: '2em', color: 'white' }} />
              </a>
              <a href="https://twitter.com">
                  <FaTwitter style={{ fontSize: '2em', color: 'white' }} />
              </a>
              <a href="mailto:your@email.com">
                  <CgMail style={{ fontSize: '2em', color: 'white' }} />
              </a>
          </div>
      </div>


  )
}

export default Footer