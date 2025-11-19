var arr=[{

    name:'KKR',
    primarycolour:'#3F0099',
    secondarycolour:'#9252BA',
    captain:'Rahane'
  },
  {
    name:'CSK',
    primarycolour:'blue',
    secondarycolour:'yellow',
    captain:'MSD'

  },
  {
    name:'MI',
    primarycolour:'blue',
    secondarycolour:'navy',
    captain:'Pandeya'
  },
  {
    name:'RCB',
    primarycolour:'#C62D27',
    secondarycolour:'black',
    captain:'Kholi'
  },
  {
    name:'SRH',
    primarycolour:'orange',
    secondarycolour:'black',
    captain:'Williamson'
  },
  {
    name:'DC',
    primarycolour:'blue',
    secondarycolour:'red',
    captain:'Pant'
  }]

console.log()
let body=document.querySelector('body')
let h1=document.querySelector('h1')
let btn= document.querySelector('button')
let h2=document.querySelector('h2')
btn.addEventListener('click',function (){
  var a= Math.floor(Math.random()*arr.length)
  h1.innerHTML=arr[a].name
  h1.style.backgroundColor=arr[a].primarycolour
  body.style.backgroundColor=arr[a].secondarycolour
  h2.innerHTML=arr[a].captain
  h2.style.color=arr[a].primarycolour
})