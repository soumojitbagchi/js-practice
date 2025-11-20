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
let arr=['hello','hola','bonjour','नमस्ते','hallo','হ্যালো','konichiwa','ni hao']
btn.addEventListener('click',function(){
  let r =Math.floor(Math.random()*100)
  let t =Math.floor(Math.random()*100)
  let d= Math.floor(Math.random()*360)
  let h1 = document.createElement('h1')
  h1.style.height='60px'
  h1.style.width='fit-content'
  h1.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
  h1.style.position='absolute'
  h1.style.top=t+'%'
  h1.style.right=r+'%'
  h1.style.rotate=d+'deg'
  main.appendChild(h1)
  h1.innerHTML=arr[Math.floor(Math.random()*arr.length)]
  h1.style.alignItems='center'
  h1.style.justifyContent='center'
  h1.style.padding='10px 20px'
  h1.style.borderRadius='5px'
  console.log(h1)
  console.log(r,d,t)
})
