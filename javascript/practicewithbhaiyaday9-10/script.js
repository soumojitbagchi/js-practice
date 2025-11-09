// question 1
// let num=Number(prompt("enter the number"));
// function check(num){
//   if (num%2===0) console.log('even');
//   else console.log('odd');
// }
// check(num);
//question 2
// let  a=Number(prompt('enter 1st number'));
// let b=Number(prompt('enter 2nd number'));
// function add(a,b){
//   return a+b;
// }
// console.log(add(a,b));
//question 3
// let val=Number(prompt('enter the string'));
// function reverse(val){
//   let rev='';
//   let a;
//   while(val!==0){
//     a=val%10;
//     val/=10;
//     Math.trunc(val);
//     rev=rev*10+a;
    
//   }
//  console.log(rev);
// }
//  defination of object
// reverse(val);
// let val={
//   input: '500' ,
//   output: {
//     main: 1500,
//     secondry:1200
//   }

// };
// console.log(val.output.main)
////rerverse an string
// let str=prompt('enter the input'));
// let rev='';
// for(let i=str.length-1;i>=0;i--){
//   rev+=str[i];
// }
// console.log(rev)
//palindrome check
// let inp=prompt('enter the string');
// let n= inp.length;
// let k=1;
// let rev='';
// for(let i=inp.length-1;i>=0;i--){
//   rev+=inp[i];
// }
// for(let i=0;i<n;i++){
//   if(inp[i]!==inp[n-i-1]){
//     console.log('this is not an palandome');
//     break;
//   }
//   else{
//     k=0;
//   }
// }
// if(k===0) console.log('this is a palandrome');

//factorial

// let a=Number(prompt('enter the number'));
// let value=Number(1)
// while(a>1){
//   value*=a;
//   a--;
// }
// console.log(`${value}`);

//checking number of vowel in a string

// let count=0;
// let input='hello';
// for(let i=0;i<input.length;i++){
//   if(input[i]==='a'||input[i]==='e'||input[i]==='i'||input[i]==='o'||input[i]==='u'){
//     count++;
//   }
// }
// console.log(`the number of  vowel in  the input is ${count}`);

//celcius to farenheit
// let celcius=Number(prompt('enter the celcius'));
// console.log(`the celcius ${celcius} is ${(9/5)*(32+celcius)} degree farenhit`);

//find maximum
// let input=prompt('enter the number with space');
// let num=input.split(" ");
// let k=num.length;
// let max=null;
// for(let i=0;i<k;i++){
//   if(max<num[i]){
//     max=num[i];
//   }
// }
// console.log(`the biggest numbwer in give array is ${max}`);

//sum of all even numbers in an array
// let val=prompt('enter elements with space');
// let arr=val.split(" ");
// let v=arr.length;
// let sum=0;
// for(let i=0;i<v;i++){
//   if(arr[i]%2===0){
//     sum+=arr[i];
//   }
// }
// console.log(`the sum of the all even numbers in an array is ${sum}`);

//rccursive 1 to n

// function recursion(n){
//   if(n===0) return 0;
//   console.log(n);
//   recursion(n-1);
// }
// recursion(5);