// var h1=document.querySelector('h1')
// var btn = document.querySelector('button')

// h1.style.color='white'
// h1.style.backgroundColor='navy'
// h1.addEventListener('click', function(){
//   console.log('event added')
  
// })
// btn.addEventListener('dblclick', function(){
//   console.log('button clicked')
//   h1.style.color='red'
//   console.log('font color changed')
//   btn.style.backgroundColor='white'
//   h1.innerHTML='dhur bara'
//   btn.style.color='black'
// })
// var hero = document.getElementById('hero')
// hero.addEventListener('click', function(){
//   console.log(' your response has been recorded')
// })
// var k=Math.floor(Math.random()*1000)
// console.log(k)
// console.log(Math.floor(Math.random()*1000))
let r=Number(0)
let g=Number(0)
let b=Number(0)
var  random=document.querySelector('#hero')
var red= document.querySelector('.red')
var green= document.querySelector('.green')
var blue= document.querySelector('.blue')
var main =document.querySelector('#display')

random.addEventListener('click',function(){
r=Math.floor(Math.random()*256)
g=Math.floor(Math.random()*256)
b=Math.floor(Math.random()*256)
console.log(r,g,b)
main.style.backgroundColor=`rgb(${r},${g},${b})`;
})
red.addEventListener('click',function(){
r=Math.floor(Math.random()*256)
main.style.backgroundColor=`rgb(${r},0,0)`;
// main.style.backgroundColor=`rgb(${r},${g},${b})`;
})
green.addEventListener('click',function(){
g=Math.floor(Math.random()*256)
main.style.backgroundColor=`rgb(0,${g},0)`
// main.style.backgroundColor=`rgb(${r},${g},${b})`;
})
blue.addEventListener('click',function(){
b=Math.floor(Math.random()*256)
main.style.backgroundColor=`rgb(0,0,${b})`
// main.style.backgroundColor=`rgb(${r},${g},${b})`;
console.log(b)
})