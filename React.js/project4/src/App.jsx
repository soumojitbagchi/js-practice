import Nav from "./components/nav";

const App = () => {
  const abc=()=>{
    console.log('bsdk');
  }
  return (
    <div className=" text-2xl">
    {/*<Nav name='Sheriyans' link={['Home','tutorial','portfolio','AboutUs']} bcolor='red'/>
      <Nav name='Apple' link={['Home','Mac','iPHone','Watch','Airpod']} bcolor='black' color='white'/>
      <Nav name='Facebook' link={['Home','Watch','Friends','Market Place','Notification','AboutUs' bcolor='blue' /> */}
    <button onClick={()=>{
      abc()
    }} className="h-20 w-40 bg-gray-800 rounded-4xl text-amber-400 active:scale-90">click me </button>

    </div>
  );
};
export default App;