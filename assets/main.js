const artworksBtn = document.querySelector('.artworks-title')
const artworkList = document.querySelector('.hide-nav')

artworksBtn.addEventListener('click', () => {
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



// function scrollHorizontally(e) {
//   e = wrapper.event || e;
//   var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//   var scrollSpeed = 15; // Janky jank <<<<<<<<<<<<<<
//   wrapper.scrollLeft -= (delta * scrollSpeed);
//   wrapper.scrollLeft -= (delta * scrollSpeed);
//   e.preventDefault();
// }

// const windowSize = window.innerWidth

// if (windowSize > 700) {
//   if (window.addEventListener) {
//   // IE9, Chrome, Safari, Opera
//   window.addEventListener("mousewheel", scrollHorizontally, false);
//   // Firefox
//   window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
// } else {
//   // IE 6/7/8
//   window.attachEvent("onmousewheel", scrollHorizontally);
// }
// }




// fill olsar iframe on click
const iframe = document.querySelector(".fill-me")
const links = document.querySelectorAll(".olsar-link")
const doc = iframe.contentDocument;

let count = 0

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener(("click"), () => {
    iframe.src = (links[i].dataset.link)
    iframe.classList.add("filled")
    links[i].classList.add("active")
    count = i
    console.log(count)
    if (!leftPanel.classList.contains("closed")) {
      leftPanel.classList.add("closed")
      iframe.style.display = 'block'
    } else {
      leftPanel.classList.remove("closed")
    }   
  })
}



const prevArrow = document.querySelector('.prev')
const nextArrow = document.querySelector('.next')
let iframeCurrentSource

nextArrow.addEventListener('click', (event) => {
  count = count + 1
  event.preventDefault()
  iframeCurrentSource = iframe.src

  links.forEach(() => {
    console.log(links[`count`])
    // iframe.src = links[count]
  })

  console.log(event)
  console.log(iframeCurrentSource)



  // check current iframe url
  // links.forEach((e, i) => {
  //   if (iframeCurrentSource === links[i]) {
  //     console.log('e', e)
  //     console.log('i', i)
  //   }
  // })
})

// close farm left nav
const leftPanel = document.querySelector(".split-wrapper__left")
leftPanel.addEventListener(("click"), () => {
  if (!leftPanel.classList.contains("closed")) {
    leftPanel.classList.add("closed")
    addCss()
  } else {
    leftPanel.classList.remove("closed")
    iframe.style.display = 'none'
  }
})