let black = document.querySelectorAll('#small')
let white = document.querySelectorAll('#big')
function sound(id) {
   new Audio(`./pianoSound/${id}.mp3`).play()
}
black.forEach(k => {
  document.addEventListener("keydown", e => {
    let l =document.querySelector(`.black[data-key='${e.key}']`)
    if(!l) return
    sound(l.dataset.sound)
  })
})
white.forEach(k => {
  document.addEventListener("keydown", e => {
    let l =document.querySelector(`.white[data-key='${e.key}']`)
    if(!l) return
    sound(l.dataset.sound)
    console.log( l.dataset.key)
  })
})
black.forEach(k => {
  k.addEventListener("click", e => {
    sound(k.dataset.sound)
  })
})
white.forEach(k => {
  k.addEventListener("click", e => {
    sound(k.dataset.sound)
  })
})