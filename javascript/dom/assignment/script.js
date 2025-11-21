var text = document.querySelector('#text')
var inc =document.querySelector('#inc')
var dec =document.querySelector('#decrese')
var i=0;
document.getElementById('home').addEventListener('click',function  opensite(){
  window.location.href='https://www.sheryians.com/classroom/gotoclassroom/6867e4147574bb008a1b3040'
})
text.innerHTML=i;
inc.addEventListener('click',function(){
  i++
  text.innerHTML=i
})
dec.addEventListener('click',function(){
  i--
  text.innerHTML=i
})
document.getElementById('yt').addEventListener('click', function openyt(){
  window.location.href='https://www.youtube.com/'
})