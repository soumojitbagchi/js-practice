// 1st question
// let val='bagchi';
// function  big (){
//   return function(){
//     console.log("hello  ,",  val);
//   }
// }
// big ()();
//2nd question
// let a=0;
// function inc(){
//   return function(){
//     a++;
//     console.log(a);
//   }
// }
// inc()();
// inc()();
// inc()();
//3rd question 
// let val= 5;
// function makeAdder(){
//   return function(){
//     return (val+10);
//   }
// }
// console.log(makeAdder()());
//4rth question method 1 {idk why do this with IIEF}
// ( function (){
//   const f= 'bokachoda';
//   console.log(f);
// })();
//4th question method  2
// function  secretcode(){
//   return function(){
//    let secret='bokachoda';
//        return secret;
//      };
// }
// console.log(secretcode()());
// console.log(secret);this is now not define
//5th question
// let val=5;
// function multiplier(number){
//   return function(){
//     return (val*2);
//   }
// }
// console.log(multiplier(val)());
// 6th question(next time)
// function bankAccount(){
//   let balance=0;
//   return {
//     let amount = 1500;
//     deposite: function(amount){
//       balance+=amount;
//       console.log(`${}`)
//     withdraw: function(1500){
//       balance+=1500;
//       return balance;
//     }
//   }
// }
// function once (x){
//  let a=1;
//  return  function(y){
//   if(a<=1){
//     return (x-y);
//   }
//   a++;
//   }
// }
// let b= once(5);
// console.log(b(2));
// let val=5;
// function square(val){
//   if(val>4) return val;
//   return val+1;
// }
// console.log(square(12,val));
// console.log(laura()());
// function laura (){
//   return function(){
//     return 'bokachoda';
//   }
// }
// function main(k){
//   return k;
// }
// let k=function(){
//   return 15;
// }
// console.log(main(k()))

// (function (){
//   let m=12;
//   console.log(m);
// })();
let result = function add(a, b) {
  return a + b;
}
console.log(result(2, 3));

