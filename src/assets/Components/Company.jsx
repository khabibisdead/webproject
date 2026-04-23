import React from "react";
import { FaApple, FaFacebook, FaGoogle, FaGoogleDrive, FaGooglePay, FaInstagram, FaLinkedin, FaMicrosoft } from "react-icons/fa";

const Company = () => {
  return (
    
   <div className="py-20 bg-yellow-50">
  <div className="container mx-auto px-6">
    <p className="text-xl text-center">
      Trusted by Leading Companies
    </p>

   <div className="flex flex-wrap justify-center items-center gap-12 mt-10">
  <FaMicrosoft className="text-5xl" />
  <FaFacebook className="text-5xl" />
  <FaLinkedin className="text-5xl" />
  <FaApple className="text-5xl" />
  <FaInstagram className="text-5xl" />
  <FaGoogle className="text-5xl" />
   <FaGooglePay className="text-5xl" />
    <FaGoogleDrive className="text-5xl" />
</div>

    







  </div>
</div>
  );
};

export default Company;