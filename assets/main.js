// console.log("build-1")

const artworksBtn = document.querySelector('.artworks-title')
const artworkList = document.querySelector('.hide-nav')

artworksBtn.addEventListener('click', () => {
    console.log("clicked")
    artworkList.classList.toggle("show-nav")
})


const wrapper = document.querySelector('.wrapper')
window.onload = () => {
  wrapper.classList.add('loaded')
};

const aboutPageBody = document.querySelector('.about')

const removeFixed = () => {
    if (document.body.contains(aboutPageBody)) {
        document.body.style.position = 'unset'
    }
}

removeFixed()



window.addEventListener("load", function(){
  
var iO = "IntersectionObserver" in window; /* true if supported */
var box = document.querySelectorAll('.link-container');
  
if (iO) {
  const config = {
    root: null, // sets the framing element to the viewport
    rootMargin: '0px',
    threshold: .1
  };
    
  let observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(item) {
      if (item.intersectionRatio > .1) {
        item.target.classList.add("active")
      } else {
        // item.target.classList.remove("active");
      }
    })
  }, config)
  box.forEach(function(item){
    observer.observe(item);
  }) 
}
})





// close farm left nav
const leftPanel = document.querySelector(".split-wrapper__left")
leftPanel.addEventListener(("click"), () => {
  if (!leftPanel.classList.contains("closed")) {
    leftPanel.classList.add ("closed")
  } else {
    leftPanel.classList.remove ("closed")
  }
})


// fill olsar iframe on click
const iframe = document.querySelector(".fill-me")
const links = document.querySelectorAll(".olsar-link")

console.log(links)


for (let i = 0; i < links.length; i++) {
  console.log(links[i])
  links[i].addEventListener(("click"), () => {
    console.log(links[i])
    iframe.src = (links[i].dataset.link)
    iframe.classList.add("filled")
    links[i].classList.add("active")
    if (!leftPanel.classList.contains("closed")) {
      leftPanel.classList.add ("closed")
    } else {
      leftPanel.classList.remove ("closed")
    }   
  })
}