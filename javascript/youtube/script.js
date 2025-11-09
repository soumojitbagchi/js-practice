// {
// const city= "bongaon";
// const name= 'Soumojit Bagchi';
// let age =15;
// console.log(name);
// console.log(city);
// console.log(age);
// let x=23;
// }
// {
// console.log(count);
// var count=42;
// const h = { hello: "teska"};

// h.hello="good job";
// console.log(h);
// }
// function getGrade(score){
// if( score >= 0 && score < 32) return "Fail";
// else if (score >= 33 && score < 59) return "D";
// else if ( score >= 60 && score < 69) return "C";
// else if ( score >= 70 && score <  79) return "B";
// else if ( score >= 80  && score < 89) return 'A';
// else if ( score >= 90  && score <= 100) return "A+" ;
// else return "Invaide marks";
// }
// console.log(getGrade(91));
//rockpapersissors logic
//  function rps(user,computer){
//   if(user===computer) return "draw";
//   if((user === "rock" && computer  === "sissor") || (user === "sissor" && computer  === "paper") || (user === "paper" && computer  === "rock")) return "user wins";
//   else if ((user === "sissor" && computer  === "rock") || (user === "paper" && computer  === "sissor") || (user === "rock" && computer  === "paper")) return "computer wins";
//  }
//  console.log(rps("sissor", "paper"));
// loops
// for(let i=10;i>0;i--){
//   if(i%2===0){
//   console.log(i);
// }
// }
// let sum =0;
// for( let i=1;i<=100;i++){
//   sum +=i;
// }
//  console.log(sum);
// let i=1;
// do{
//   console.log(i);
//   i++;
// }while(i<15)
let i =1;
while(i<10){
  console.log(`i*5`);
  i++;
}
//function
function dance(){
  console.log("dance");
  console.log("dance");
  console.log("dance");
  console.log("dance");
  console.log("dance");

  console.log("dance");
}
  console.log("dance");
  dance();
  // fat arrow function
  ()=>{
    console.log("hey");
  } ;
  // function types
  function nach(v1){
  console.log(`${v1} naach raha hain`);
}
  nach("gora");
  nach("gadha");
  nach("dinosore");
  //default parameter
function add(a=0 ,b=0){
    console.log(a+b);
  }
  add(1,5);
//when arguments are many so we need to make that much parameter  so we use REST , if a function's parameter use in a space then this called rest operator and if it is attaches with array and objects then it is called spread paremeter 
function abcd(...val){ //val is a array
  console.log(val);
}
abcd(1,2,2,6,5,44,8,66); //rest operator
// return mean - jahan se ayeho yahhi daal denge
function abcd(){
  return 12;
}
let val =abcd();
console.log(val);

function abcde(v){
  return 12+v;
}
let valo =abcde(51);
console.log(valo);

// first class function - functions that can treat like value
//high order fn -> function that return a function or accept a function in its paremeter
function abc(val){// higher order function
  val();
}
abc(function(){// eta referance hoia val er moddhe jacche , first class function
  console.log("hey");
}); 

// if a function cause change in the value outside the function then it is called unpure function
let x=1;
function xyz(){
   x++;
}
// if a function doesn't change any value outside the function then it is called pure function
function xy(){
  console.log(x);
}
//the  function who return another function and the return function always use their parant function's variables , then the parant function is called closures functions
function closures(){
  let closure =3;
  return function(){
    console.log(closure);
  }
}
//lexical range
function laxical(){
  let lex=12;// range between laxical
  function lexical1(){
    let lex1=12; // range between laxical1
    function lexical2(){
      let lex2=13; // range between laaxical2
    }
  } 
}

// IIEF (immediately invoke function expression)
(function() {
  console.log('HEY');
})() ; 

//hoisting is same in var and function
// in function expression we can't use hoisting ,mean if we assign the function to a variable

//ARRAYS

// .push() add elements in array
//.pop() remove an element in a array (last one)
//.shift remove an element in a array (first one)
// .unshift add an element in a array( first)
// .splice remove elements from any positions in a array, if arr.splice(2,3)-> it's mean from 2nd index it remove 3 elements
//.slice its copy elements from an array , user can control index where to start and where to end, and it's can't cange the main array

//sorting in  js 
let arr =[11,2,3,55,48];
let srt= arr.sort(function (a,b){
  return a-b; //a-b for accending order
})            //b-a for decending order
console.log(srt);

//foreach -> its mean that function run for every element.
 arr.forEach(function(val){
  console.log(val+5);
 })

 //Map-> we use map when we need to make a new array using a old array, both have same elements
 let mp=arr.map(function (val){
  if(val>10) return val;
  else return val+4;
 });//we use map when see we had to make an array from a old array and new one have some values from old ones
  console.log(mp);

  //filter -> when we have to make an array from an old array's specific elements then we use filter
  let fil=arr.filter( function(val){
    if (val>5) return true; // if we use true then it will allow to take the value in the new array & if we use false then it will allow to discard the value from the new array 
  });
  console.log(fil);