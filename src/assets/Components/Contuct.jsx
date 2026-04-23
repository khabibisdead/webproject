import React from "react";

const Contuct = () => {
  return (
    <div className="mt-20 px-6">

      <div className="text-3xl font-bold text-center">
        <span>Reach out to us!</span>
      </div>

      <div className="text-center mt-4 text-gray-500">
        <span>
          Let's talk! Whether it is a quick question or a big project,
          we are just a message away.
        </span>
      </div>


      <div className="flex gap-50">


         <div>
        <p>Your Name</p>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-30px border border-gray-300 rounded-md p-2 mt-1"
        />
      </div>

         
         <div>
        <p>Your Email</p>
        <input
          type="text"
          placeholder="Enter your email"
          className="w-30px border border-gray-300 rounded-md p-2 mt-1"
        />
      </div>



      </div>

     

    </div>
  );
};

export default Contuct;