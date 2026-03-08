import React from "react";
import { useParams } from "react-router-dom";
const Excourses = () => {
  const pram = useParams();
  return (
    <div>
      <h1>{pram.id} courses</h1>
    </div>
  );
};

export default Excourses;
