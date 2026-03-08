import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Courses = () => {

  return (
    <div>
      
      <div className="flex flex-nowrap uppercase bg-red-300 gap-4 text-[2vh]">
        <p>sale is here !!!</p>
        <p>sale is here !!!</p>
        <p>sale is here !!!</p>
        <p>sale is here !!!</p>
        <p>sale is here !!!</p>
        <p>sale is here !!!</p>
        <p>sale is here !!!</p>
        <p>sale is here !!!</p>
        <p>sale is here !!!</p>
        <p>sale is here !!!</p>
        <p>sale is here !!!</p>
        <p>sale is here !!!</p>
        <p>sale is here !!!</p>
      </div>
      <Outlet />
   
    </div>
  );
};

export default Courses;
