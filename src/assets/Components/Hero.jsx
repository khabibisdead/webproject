import React from "react";

const Hero=()=>{
    return(

       <div>

  <div className="flex justify-center">
            <span>Trusted by 20k+ people</span>
        </div>

        <div className="flex flex-col items-center py-15 text-7xl">
            <div>We help Brands Grow with</div> 
            <div><span className="text-amber-300">Performance</span> Marketing</div> 
        </div>


        <div className="flex-col flex items-center text-xl text-gray-400">
            <div > At our agency , we take pride in delivering impactfull solution </div> 
            <div> that combine creativity , strategy and technology</div>
             <div>We just don't settle for average, we innovate idea!</div>
        </div>

       
          
          
        <div className=" flex  justify-center">
  <div className="flex gap-4 py-15 ">
    <div className="bg-amber-300 rounded-2xl p-2">Contact Me</div>
    <div className="bg-black text-white rounded-2xl p-2">Digital Market</div>
  </div>
</div>


          <div className="max-w-5xl mx-auto mt-16 rounded-2xl shadow-overflow-hidden">
            <img src="https://cdn.pixabay.com/photo/2016/11/21/16/27/laptop-1846277_1280.jpg" alt="" />
          </div>

       </div>

       
      
       
        
    );
};

export default Hero;