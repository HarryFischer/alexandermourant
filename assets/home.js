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
    entries.forEach(function (item) {
      // item.src = item.dataset.src
      if (item.intersectionRatio > .1) {
        item.target.classList.add("active")
        // item.src = item.dataset.src
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

const leftPanel = document.querySelector(".split-wrapper__left")
console.log(leftPanel)


if (leftPanel) {
  leftPanel.addEventListener(("click"), () => {
  console.log("clicked")
  if (!leftPanel.classList.contains("closed")) {
    leftPanel.classList.add("closed")
    iframe.style.display = 'block'
    console.log("open")
  } else {
    leftPanel.classList.remove("closed")
    // iframe.style.display = 'none'
    console.log("closed")
  }
})
}


// fill olsar iframe on click
const iframe = document.querySelector(".fill-me")
console.log(iframe)
const links = document.querySelectorAll(".olsar-link")
console.log(links)
const prevArrow = document.querySelector('.prev')
console.log(prevArrow)
const nextArrow = document.querySelector('.next')
console.log(nextArrow)

var prevIndex
// var prevIndex = links.length;
console.log(prevIndex)


links.forEach((el, i) => {
  el.addEventListener(("click"), () => {
    iframe.src = (el.dataset.link)
    iframe.classList.add("filled")
    el.classList.add("active")
    if (!leftPanel.classList.contains("closed")) {
      leftPanel.classList.add("closed")
      iframe.style.display = 'block'
      prevIndex = i;
      if (prevIndex <= 0) {
        document.querySelector('.prev').style.opacity = "0";
      } else if (prevIndex >= links.length -1) {
         document.querySelector('.next').style.opacity = "0";
      } else {
        document.querySelector('.next').style.opacity = "1";
        document.querySelector('.prev').style.opacity = "1";
      }
    } else {
      leftPanel.classList.remove("closed")
      prevIndex = i;
    }
  })
})


function nextURL(count) {
  prevIndex += count;

  if (prevIndex >= links.length - 1) {
    prevIndex = 0;
  }
  
  if (prevIndex <= 0) {
    document.querySelector('.prev').style.opacity = "0";
    document.querySelector('.prev').style['pointer-events'] = 'none';
  } else if (prevIndex === links.length -1) {
    document.querySelector('.next').style.opacity = "0";
    document.querySelector('.next').style['pointer-events'] = 'none';
  } else {
    document.querySelector('.next').style.opacity = "1";
    document.querySelector('.next').style['pointer-events'] = 'auto';
    document.querySelector('.prev').style.opacity = "1";
    document.querySelector('.prev').style['pointer-events'] = 'auto';
  }
  
  iframe.src = links[prevIndex]?.dataset?.link;
}

const changeUrl = (direction) => {
  const count = direction === "up" ? 1 : -1
  nextURL(count)
}

document
  .querySelector('.next')
  .addEventListener('click', () => {
    changeUrl("up")
    console.log(prevIndex)
  });

document
  .querySelector('.prev')
  .addEventListener('click', () => {
    changeUrl("down")
    console.log(prevIndex)

  });