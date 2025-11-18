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
main.style.backgroundColor=`rgb(${r},${g},${b})`;
})
green.addEventListener('click',function(){
g=Math.floor(Math.random()*256)
main.style.backgroundColor=`rgb(${r},${g},${b})`;
})
blue.addEventListener('click',function(){
b=Math.floor(Math.random()*256)
main.style.backgroundColor=`rgb('${r},${g},${b}')`;
})