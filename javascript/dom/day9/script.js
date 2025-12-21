const reels=[
  {
    username: "user_01",
    likeCount: 120,
    isLiked: false,
    commentCount: 14,
    caption: "Late night debugging sessions be like :- ",
    video: "./reels/v1.mp4",
    userProfile: "https://images.unsplash.com/photo-1684966610091-f6beda2d025a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 3,
    isFollowed: true
  },
  {
    username: "dev_arth",
    likeCount: 532,
    isLiked: true,
    commentCount: 41,
    caption: "When the code works on first try. Rare event.",
    video: "./reels/v2.mp4",
    userProfile: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 12,
    isFollowed: false
  },
  {
    username: "code.slayer",
    likeCount: 88,
    isLiked: false,
    commentCount: 9,
    caption: "Frontend is pain but CSS is torture.",
    video: "./reels/v3.mp4",
    userProfile: "https://plus.unsplash.com/premium_photo-1739333585975-c7c456f3985b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 1,
    isFollowed: false
  },
  {
    username: "api_kid",
    likeCount: 301,
    isLiked: true,
    commentCount: 27,
    caption: "Backend devs when frontend cries.",
    video: "./reels/v5.mp4",
    userProfile: "https://images.unsplash.com/photo-1561105959-548f9d371408?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 5,
    isFollowed: true
  },
  {
    username: "stackOverflowBaba",
    likeCount: 999,
    isLiked: true,
    commentCount: 63,
    caption: "Copied answer. Still works.",
    video: "./reels/v1.mp4",
    userProfile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 22,
    isFollowed: true
  },
  {
    username: "bug_hunter",
    likeCount: 76,
    isLiked: false,
    commentCount: 3,
    caption: "Fixed one bug. Created three more.",
    video: "./reels/v2.mp4",
    userProfile: "https://images.unsplash.com/photo-1658281097220-eb7672eed00b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 0,
    isFollowed: false
  },
  {
    username: "cloud_noob",
    likeCount: 412,
    isLiked: false,
    commentCount: 18,
    caption: "AWS bill made me cry again.",
    video: "./reels/v3.mp4",
    userProfile: "https://images.unsplash.com/photo-1618018352910-72bdafdc82a6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 6,
    isFollowed: false
  },
  {
    username: "semicolonkiller",
    likeCount: 254,
    isLiked: true,
    commentCount: 12,
    caption: "Forgot a semicolon. Whole app down.",
    video: "./reels/v4.mp4",
    userProfile: "https://images.unsplash.com/photo-1658932447775-dd78d1e7c369?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 4,
    isFollowed: true
  },
  {
    username: "runtimeTerror",
    likeCount: 145,
    isLiked: false,
    commentCount: 7,
    caption: "JS developers after adding one more console.log().",
    video: "./reels/v4.mp4",
    userProfile: "https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 2,
    isFollowed: false
  },
  {
    username: "null_pointer",
    likeCount: 502,
    isLiked: true,
    commentCount: 33,
    caption: "Everything was fine until it wasn't.",
    video: "./reels/v5.mp4",
    userProfile: "https://images.unsplash.com/photo-1658932447761-8a59cd02d201?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 9,
    isFollowed: true
  }
];
let sum =``
reels.forEach((del,i)=>{
  sum += `<div class="reels">
          <video  autoplay muted loop src="${del.video}" onerror="this.onerror=null; console.error('Video failed to load:', this.src);"></video>
          <div class="bar">
            <div class="like" , data-index="${i}">
              <i class="ri-thumb-up-fill" class="like-button"  style="color: ${del.isLiked ? 'red' : '#fff'};  font-size: 4vh;"></i>
              <h3>${del.isLiked ? "like" : del.likeCount }</h3>
            </div>
            <div class="dislike">
              <i class="ri-thumb-down-fill" style="color: #fff;  font-size: 4vh;"></i>
              <h3>Dislike</h3>
            </div>
            <div class="comment">
              <i class="ri-message-fill" style="color: #fff;  font-size: 4vh;"></i>
              <h3>${del.commentCount}</h3>
            </div>
            <div class="share">
              <i class="ri-share-forward-line" style="color: #fff;  font-size: 4vh;"></i>
              <h3>${del.shareCount}</h3>
            </div>
            <div class="music">
              <i class="ri-more-2-line" style="color: #fff;  font-size: 4vh;"></i>
            </div>
          </div>
          <div class="bottom">
            <div class="user">
              <div class="lower">
                <img src="${del.userProfile}" alt="">
                <h4>${del.username}</h4>
                <button>${del.isFollowed ? 'following' : 'Follow'}</button>
              </div>
              <h1>${del.caption}</h1>
            </div>
          </div>
        </div>`
})
let allReels= document.querySelector('.all-reels')
  allReels.innerHTML=sum
  const video = document.querySelectorAll('video')
const likes = document.querySelectorAll(".like");
likes.forEach((like) => { 
    const icon = like.querySelector('i')
    const text = like.querySelector('h3')
    const index= like.dataset.index
  let col=document.querySelector('.like-button')
  if(icon.style.color === 'red'){
    text.innerHTML = 'liked'
    }
  like.addEventListener('click', () => {
    if(icon.style.color === 'red'){
    icon.style.color = '#fff'
    text.innerHTML = reels[index].likeCount
    }
    else{
      setTimeout(()=>{
      icon.style.color = 'red'
      text.innerHTML='liked'
      },100)
      setTimeout(()=>{
      text.innerHTML= reels[index].likeCount+1
      },2000)
    }
  })
  video.forEach(video => {
  video.addEventListener('dblclick',()=>{
    setTimeout(()=>{
      icon.style.color = 'red'
      text.innerHTML='liked'
    },100)
    setTimeout(()=>{
      text.innerHTML= reels[index].likeCount+1
        },2000)
    })
  })
})
const dislikes = document.querySelectorAll(".dislike");
dislikes.forEach((dislike) => { 
    const icon = dislike.querySelector('i')
    const text = dislike.querySelector('h3')
    const index= dislike.dataset.index
  dislike.addEventListener('click', () => {
      setTimeout(()=>{
    icon.style.color = 'red'
    },1)
    setTimeout(()=>{
      icon.style.color='#fff'
    },2000)
  })
})
const button = document.querySelectorAll('.lower button')
button.forEach(button =>{
  if(button.innerText==='following'){
      button.innerText='follow'
      button.style.color='#fff'
      button.style.backgroundColor='#3676E9'
    }else{
      button.innerText='following'
      button.style.color='#fff'
      button.style.backgroundColor='transparent'
    }
  button.addEventListener('click',()=>{
    if(button.innerText==='following'){
      button.innerText='follow'
      button.style.color='#fff'
      button.style.backgroundColor='#3676E9'
    }else{
      button.innerText='following'
      button.style.color='#fff'
      button.style.backgroundColor='transparent'
    }
  })
})
