import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./assets/Components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path='/' Component={Home}/>
      </Routes>

    </div>
  );
};

export default App;