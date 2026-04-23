import React from "react";
import { FaCode } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

import { FaBullhorn } from "react-icons/fa";
const Service = () => {
  return (
    <div className="bg-violet-100">
       

       <div className="flex justify-center">
        <span className="text-5xl ">How can we help you ?</span>
       </div>\
       <div className="flex justify-center text-gray-400">
        <span>Wheather you launching a new product or need support with an existing one, we're here to help.</span>
       </div>
       <div className="flex justify-center text-gray-400">
        <span>Lorem ipsum, dolor sit , eum molestiae vero magni fuga aliquid nobis!</span>
       </div>



       <div>

              
             

             <div className="border-2 border-black-300 rounded-2xl p-4 m-4 bg-amber-100">
                <FaCode/>
                <div><span className="text-2xl">Web Development</span></div>
                <div><span  className="text-gray-500">We create fast responsive and userfriendly websites helping to your bussiness needed. We design and develop modern, fast, and responsive websites tailored to your business needs. Our goal is to create user-friendly digital experiences that look great on all devices. We focus on clean design, smooth performance, and strong functionality. Whether it's a startup or an established business, we help you build a strong online presence and grow your brand effectively.</span></div>
             </div>

             <div className="border-2 border-black-300 rounded-2xl p-4 m-4 bg-amber-100">
                <FaPaintBrush/>
                <div><span className="text-2xl">Graphics Design</span></div>
                <div><span  className="text-gray-500">We create modern and visually appealing graphic designs that help brands stand out. From logos and social media posts to banners and marketing materials, we focus on strong visual storytelling. Our designs are clean, creative, and aligned with your brand identity. We aim to deliver impactful visuals that attract attention and communicate your message effectively. Whether it's digital or print, we bring your ideas to life with professional quality design.</span></div>
             </div>


             <div className="border-2 border-black-300 rounded-2xl p-4 m-4 bg-amber-100">
                <FaBullhorn/>
                <div><span className="text-2xl">Digital Marketing</span></div>
                <div><span  className="text-gray-500">We provide result-driven digital marketing strategies to help businesses grow online. Our focus is on increasing brand visibility, driving targeted traffic, and improving customer engagement. We use modern tools and data-driven techniques including social media marketing, SEO, and paid advertising. Every campaign is tailored to reach the right audience and maximize conversions. Our goal is to help your business achieve sustainable growth in the digital world.</span></div>
             </div>


             <div className="border-2 border-black-300 rounded-2xl p-4 m-4 bg-amber-100">
                <FaMobileAlt/>
                <div><span className="text-2xl">Mobile App Development</span></div>
                <div><span  className="text-gray-500">We develop modern, fast, and user-friendly mobile applications for both Android and iOS platforms. Our focus is on creating smooth performance, clean UI, and seamless user experience. We turn your ideas into fully functional mobile apps that solve real problems. From design to development, we ensure high-quality standards and scalability. Our goal is to build apps that help your business grow and engage users effectively.</span></div>
             </div>




       </div>

    </div>

  );

};

export default Service;