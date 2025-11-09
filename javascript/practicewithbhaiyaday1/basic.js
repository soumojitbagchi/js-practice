// let nm = alert(prompt('enter your name : '));
// console.warn(nm);
// alert("hello");
// prompt('enter your name');
// backtick for calculation
// Typeof use for premetive values mostly
// Instinctof use for referance values 
// let a = 10;
// let b = 20;
// if (a>5 && b<25){
//   console.log("A");
// } else {
//   console.log("B");
// }
// let isAdmin = true ;
// let isLoggedIn = false ;
//  if (isAdmin || isLoggedIn){
//   console.log("access granted");
//  } else {
//   console.log("access denied");
//  }
// let temp = 35;
// if (!(temp<30)
//   ){
// console.log("Hot");
// } else {
//   console.log("Pleasant");
// }
// let score =78;
// let grade = score >= 90 ? "A" : score >= 75 ?  "B" :score >= 60? "C": "Fail";
// console.log(grade);
// let points = 120;
// let status = points > 100 ? "Gold":  points > 50 ? "Silver" : "Bronze";
// console.log(status);
// let x=3 ;
// let y= x++;
// console.log(x,y);
//  function likePost(){
//   return ++ likes;
// }
// console.log(likePost());
// console.log(likes);
// let val = prompt("enter the number"); 
// let i =1;
// while(i<=val){
//   if(i%2!==0){
//   console.log(`${i} is a odd number`);
//   }
//   else{
//     console.log(`${i} is a even number`);
//   }
//   i++;
// }
// let val = prompt('enter the number');
// for(let i= 1;i<val;i++){
//   if(i%3===0){
//   continue;
//   }
//     console.log(i);
// }

// else if  ladder
// let isLoggedIn = true;
// let isAdmin = false;
// if(!isAdmin && isLoggedIn){
//   console.log("acess granted to Admin user");
// } else if(isAdmin && isLoggedIn){
//   console.log("Acess granted to non-Admin");
// }else{
//   console.log("acess denied");
// }

//switch case
// let wtr ="rainy";
// switch(wtr){
//   case "rainy": 
//     console.log("always have a umbrella");
//     break;
//   case "sunny":
//     console.log("drink water properly");
//   case "cold":
//     console.log("come back home as fast as possible");
// }

//Number triangle using js
// let a=prompt("enter the number");
// for(let i=1;i<=a;i++){
//   let line="";
//   for(let j=1;j<=a-i;j++){
//     line+=" ";
//   }

//   for(let j=1;j<=i;j++){
//     // if(j%2!==0){
//     line+=j+" ";
//     // }else{
//     //   line+="_";
//     }
//   console.log(line);
//   }
//number triangle 
// let b=prompt("enter the number");
// for(let k=1;k<=b;k++){
//   let line="";
//   for(let l=1;l<=b-k;l++){
//     line+=" ";
//   }

//   for(let l=1;l<=k;l++){
//     // if(j%2!==0){
//     line+=k+" ";
//     // }else{
//     //   line+="_";
//     }
//   console.log(line);
//   }
//palandrom checker 
// let p= Number(prompt("enter the number"));
// let original=p;
// let rev=0;
// while(p>0){
//   let digit= p%10;
//   p=Math.floor(p/10);
//   rev= rev*10+digit;
// }
// if(original<10){
//   console.log(`${original} must meet condition`);
// }
// else if(original===rev){
//   console.log(` ${original} is a  palandrome`);
// } else{
//   console.log(`${original} is not a palandrome`);
// }
// function ad(val){
//   val();
// }
// ad(function (){
//   console.log("hey ");
// })

// BMI calculator
// function BMI(weight,height){
//   return weight/(height*height);
// }
// console.log(BMI(63.2,1.72).toFixed(1)); 

//reuseable discount calculator(HOF)
// function discountcalculator(price,discount){
//   return function(){
//     return price*(100-discount)/100;
//   }
// }
// let d=discountcalculator(120,5)();
// console.log(d); 

// counter using closures
// function counter(){
//   let c=0;
//   return function(){
//     c++;
//     return c;
//   }
// }
// let d=counter();
// console.log(d());
// console.log(d());
// console.log(d());
// console.log(d());
// console.log(d());
// console.log(d());

// transform values using higher function
// function double(val){
//   return function(){
//     return val*val;
//   }
// }
// let d=double(5);
// console.log(d());

// use IIFE to isolate values
(function (){
  let password='secret';
  console.log(password);
})();
 console.log(password);