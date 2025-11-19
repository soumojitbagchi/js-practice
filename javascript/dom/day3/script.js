// let btn=document.createElement('button')
// btn.innerHTML='click me'
// console.log(btn)
// let main =document.querySelector('main')
// let body =document.querySelector('body')
// main.appendChild(btn)
let main = document.querySelector('body')
let btn = document.querySelector('button')
btn.style.position='absolute'
btn.style.zIndex = '10'
btn.addEventListener('click',function(){
  let r =Math.floor(Math.random()*100)
  let t =Math.floor(Math.random()*100)
  let d= Math.floor(Math.random()*360)
  let div = document.createElement('div')
  div.style.height='40px'
  div.style.width='40px'
  div.style.backgroundColor=`rgb(${Math.floor(Math.random()*100)},${Math.floor(Math.random()*100)},${Math.floor(Math.random()*100)})`
  div.style.position='absolute'
  div.style.top=t+'%'
  div.style.right=r+'%'
  div.style.rotate=d+'deg'
  main.appendChild(div)
  console.log(r,d,t)
})
