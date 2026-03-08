import React from "react";

const user = (props) => {
  let c1 = Math.floor(Math.random() * 257);
  let c2 = Math.floor(Math.random() * 257);
  let c3 = Math.floor(Math.random() * 257);
  return (
    <div
      className="h-45 w-60 p-2 m-2 flex flex-col"
      style={{ backgroundColor: `rgb(${c1},${c2},${c3})` }}
    >
      <h2 className="font-bold text-3xl">{props.del.name}</h2>
      <p>{props.del.company.name}</p>
      <h4>{props.del.email}</h4>
      <h4>{props.del.website}</h4>
    </div>
  );
};

export default user;
