const Nav = (props) => {
  return (
    <div className="bg-black">
      <div style={{backgroundColor:props.bcolor,color:props.color}} className="h-20 w-full flex justify-between items-center px-8 py-3 my-5">
        <div>
          <div>{props.name}</div>
        </div>
        <div className="flex justify-evenly gap-25 m-6">
          {props.link.map(function(elem){
            return <h3 className="">{elem}</h3>
          })}
        </div>
      </div>
    </div>
  );
};

export default Nav;