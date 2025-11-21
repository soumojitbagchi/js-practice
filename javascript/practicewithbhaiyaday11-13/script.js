// function hello (){
//     console.log("hello js");
// }
// hello();
// let v=function sum (a,b){
//   return  a+b;
// }
// console.log(`${v(1,2)}`);
// function greeting(guest='guest'){
//   console.log(`hello ${guest} `);
// }
// // greeting('bagchi');
// function addunlimited(...nums){
//   let sum =nums.reduce(function(acc,ans){
//     return acc+ans;
//   },0);
//   console.log(sum);
  // nums.forEach(function(val){
  //   sum=sum+val ;
// };
// addunlimited(1,2,5,8)
// we use reduce when we need to reduce an array to a single value  
// let arr=["apple","oranage","peaches","grapes"];
// arr.push['green peas'];
// arr.pull["peaches"];

//pure function and impure function 
// function pure(a,b){
//   console.log(a+b)
// }
// pure (1,2);
// pure(1,2);// for both output remain same
// let global =0;
//  function impure(a){
//   global ++;
//   console.log(`${a+global}`);
//  }
//  impure(2);
//  function abcd({name,age}){
//   console.log(name,age); //also written as this , or obj.name
//  }
//  abcd({name:'bagchi',age:18});

 let obj ={
  name:'bagchi',
  snc: function (){
    console.log(this);
  },
  fnc:()=>{
    console.log(this);
  },
 }
 obj.fnc();
 obj.snc();