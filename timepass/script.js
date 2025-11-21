let right=document.querySelector('.right')
let left=document.querySelector('.left')
let upper=document.querySelector('.upper')
let lower=document.querySelector('.lower')
let box=document.querySelector('.box')
let btn = document.querySelector('button')
let m=50 +Math.floor(Math.random()*50)
let num=0
let search =document.querySelector('#search')
let a=Math.floor(Math.random()*100)
let g=0
let r=0
let b=0
let h1=document.querySelector('h1')
btn.addEventListener('click',()=>{
    search.value=""
    btn.style.pointerEvents=''
    btn.innerHTML='answering...'
    btn.style.fontSize='3vh'
    btn.style.backgroundColor='green'
  let l= setInterval(()=>{
    r=Math.floor(Math.random()*256)
    g=Math.floor(Math.random()*256)
    b=Math.floor(Math.random()*256)
    right.style.backgroundColor=`rgb(${r},${g},${b})`
    upper.style.backgroundColor=`rgb(${g},${r},${b})`
    btn.style.backgroundColor='green'
    search.style.backgroundColor='bisque'
    right.style.opacity='0.7'
    h1.innerHTML='generating....'
    h1.style.opacity='0.4'
  },m*(100/258))
  setTimeout(()=>{
    console.log('time khatam nikal ab')
    btn.style.opacity='1'
  
    clearInterval(l)
    btn.style.backgroundColor='red'
    upper.style.backgroundColor='white'
    btn.innerHTML='ask'
    h1.innerHTML=''
  },m*100)
})