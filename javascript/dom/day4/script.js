// console.log('hello')
// setTimeout(function(){
//   console.log('ki re bokachoda')
// },3000)
// setTimeout(function(){
//   console.log('bero be bara')
// },5000)
// setTimeout(function(){
//   console.log('banchod ekhono achis tui')
// },8000)
// let btn = document.querySelector('button')
// let h1 =  document.querySelector('h1')
// btn.innerHTML='full name'
// btn.addEventListener('click',function(){
//   h1.innerHTML='revealing'
//   setTimeout(function(){
//     h1.innerHTML='soumojit bagchi'
//   },3000)
// })
// let a =1
// var int = setInterval(function(){
//   console.log(a)
//   a++
// },10)
// setTimeout(function(){
//   clearInterval(int)
// },1000)
let btn = document.querySelector('button')
let m=50 +Math.floor(Math.random()*50)
let num=0
let a=Math.floor(Math.random()*100)
let h1=document.querySelector('h1')
let inner=document.querySelector('#inner')
let g=0
let r=256
btn.addEventListener('click',()=>{
  btn.style.pointerEvents='none'
  btn.innerHTML='downloading...'
  let l= setInterval(()=>{
   main.style.backgroundColor=`rgb(${r},${g},0)`
   inner.style.backgroundColor=`rgb(${g},${r},0)`
   g++
   r--
   console.log(`rgb(${r},${g},0)`)
  },m*(100/258))
  setTimeout(()=>{
    clearInterval(l)
    inner.style.backgroundColor=''
  },m*100)
  let t= setInterval(()=>{
    num++
    inner.style.width=num+'%'
    h1.innerHTML=num+'%'
  },m)
  setTimeout(()=>{
    console.log('time khatam nikal ab')
    clearInterval(t)
    btn.style.opacity='0.7'
    btn.style.backgroundColor='green'
    btn.innerHTML='downloaded'
  },m*100)
})