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

