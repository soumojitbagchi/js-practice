import { useState } from "react";
import React from "react";

export const App = () => {
  const submitHandeler = (e) => {
    console.log("hello");
    e.preventDefault();
  };
  const [userName, setuserName] = useState("");
  const [position, setposition] = useState("");
  const [description, setdescription] = useState("");
  const [url, seturl] = useState("");
  const [allElem, setallElem] = useState([]);
  const deleteHandler = (idx) => {
    console.log("deleted");
    const copyUser = [...allElem];
    copyUser.splice(idx, 1);
    setallElem(copyUser);
  };
  return (
    <div className="h-screen bg-black text-white">
      <form
        action=""
        onSubmit={(e) => {
          submitHandeler(e);
          let Obj = { userName, position, description, url };
          setuserName("");
          setdescription("");
          seturl("");
          setposition("");
          setallElem([...allElem, Obj]);
        }}
      >
        <input
          className="px-2 py-2 border-2 rounded-2xl m-2 w-[48%]"
          value={userName}
          type="text"
          placeholder="Enter Name"
          onChange={(e) => {
            setuserName(e.target.value);
          }}
        />
        <input
          className="px-2 py-2 border-2 rounded-2xl m-2 w-[48%]"
          value={url}
          type="text"
          placeholder="Image URL"
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />
        <input
          className="px-2 py-2 border-2 rounded-2xl m-2 w-[48%]"
          value={position}
          type="text"
          placeholder="Enter Position"
          onChange={(e) => {
            setposition(e.target.value);
          }}
        />
        <input
          className="px-2 py-2 border-2 rounded-2xl m-2 w-[48%]"
          value={description}
          type="text"
          placeholder="Enter Description"
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
        <button className="px-2 py-2 border-white rounded-2xl m-2 w-[48%]  bg-emerald-500 active:scale-95">
          Create User
        </button>
      </form>
      <div className="flex">
        {allElem.map((e, idx) => (
          <div className="m-5 flex flex-row flex-wrap">
            <div
              key={idx}
              className="bg-white text-black h-[38vh] w-[20vw] flex flex-col rounded-2xl items-center gap-3 p-3"
            >
              <img
                className="h-30 w-30 rounded-full  my-1.5 object-cover object-center"
                src={e.url}
                alt="0"
              />
              <h2 className="text-3xl font-bold">{e.userName}</h2>
              <h5 className="text-2xl text-blue-400">{e.position}</h5>
              <p className="text-center italic">{e.description}</p>
              <button
                className="px-3 py-2 mb-2 active:scale-95 bg-red-500 rounded-2xl"
                onClick={() => {
                  deleteHandler(idx);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
