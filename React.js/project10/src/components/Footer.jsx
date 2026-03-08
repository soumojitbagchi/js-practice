import React from "react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const nav=useNavigate();
  return (
    <div className="bg-mauve-600 h-20 text-center w-full text-4xl flex flex-row justify-between  bottom-0 absolute pl-2 ">
      <h3 className="pt-5" >Footer</h3>
      <button onClick={()=>{nav('/courses')}} className="bg-sky-300 h-15  w-fit p-2.5 absolute right-1 top-3 rounded-xl ">Explore courses</button>
    </div>
  );
};

export default Footer;
