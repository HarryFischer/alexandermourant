console.log("HF", document)

const wrapper = document.querySelector('.wrapper')
window.onload = () => {
  wrapper.classList.add('loaded')
};

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



// if(window.parent.document.querySelector("iframe").classList.contains("fill-me")) {
//   console.log("true")
//   const mq = window.matchMedia('(min-width: 700px)');
//   // const scrollContainer = document.getElementById("#content-wrapper")
//   const scrollContainer = document.querySelector(".wrapper")
//   console.log(scrollContainer)

//   if(mq.matches) {
//     console.log("TRUE")
//     scrollContainer.addEventListener("wheel", (evt) => {
//       // evt.preventDefault();
//       scrollContainer.scrollLeft += evt.deltaY;
//     })
//   }
// }

