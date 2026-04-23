import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white-800 text-black p-4"> 
      <div className="flex items-center justify-between px-6 py-8">
          <div className="font-bold text-2xl"> Brightmatter.io</div>
          <div className="flex gap-4.5">
            <h1>Home </h1>
            <h1>About </h1>
            <h1>Contact </h1>
            <h1>Services </h1>
          </div >
          <div >
            
            <button className="bg-amber-300 rounded-2xl p-2">
                Contact Me -
                
            </button>
            
            
            </div>
      </div>
    </nav>
  );
};

export default Navbar;