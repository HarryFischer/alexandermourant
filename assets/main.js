// console.log("build-1")

const artworksBtn = document.querySelector('.artworks-title')
const artworkList = document.querySelector('.hide-nav')

artworksBtn.addEventListener('click', () => {
    console.log("clicked")
    artworkList.classList.toggle("show-nav")
})





// const images = document.querySelectorAll(".rollover-image")
// const images = document.querySelectorAll('.link-container')
// console.log(images)

// function elementInViewport(el) {
//     const windowWidth = window.innerWidth
//     console.log(windowWidth)
//     const elementScroll = el.getBoundingClientRect().right
//     // const elementScroll = el.getBoundingClientRect().right - windowWidth
//     console.log(elementScroll)
//     const offSet = 60
//     return elementScroll < (offSet * -1)
// }
// console.log(elementInViewport())
// console.log(elementScroll)

// document.addEventListener("scroll", () => {
//     images.forEach((i) => {
//         if (elementInViewport(i)) {
//             i.classList.add('inView')
//         } else {
//             i.classList.remove('inView')
//         }
//     })
// })

// import in-view from in-view

// inView('.link-container')
//     .on('enter', doSomething)
//     .on('exit', el => {
//         el.style.opacity = 0.5;
//     });


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




// function elementInViewport(el) {
//   var top = el.offsetTop;
//   var left = el.offsetLeft;
//   var width = el.offsetWidth;
//   var height = el.offsetHeight;

//   while(el.offsetParent) {
//     el = el.offsetParent;
//     top += el.offsetTop;
//     left += el.offsetLeft;
//   }

//   return (
//     top < (window.pageYOffset + window.innerHeight) &&
//     left < (window.pageXOffset + window.innerWidth) &&
//     (top + height) > window.pageYOffset &&
//     (left + width) > window.pageXOffset
//   );
// }

// function isElementInViewport (el) {
//     var rect = el.getBoundingClientRect();

//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
//     );
// }

// const slideInElement = document.querySelectorAll('.link-container') 
// console.log(slideInElement[6])
// console.log(isElementInViewport(slideInElement[6]))


window.onscroll = () => {

    var elements = querySelectorAll('.link-container');
    for(var i = 0; i != elements.length; i++)
    {
        if(elements[i].getBoundingClientRect().left <= window.innerWidth * 0.75 &&
            elements[i].getBoundingClientRect().left > 0)
            console.log('one');
        {
            console.log('hello');
        }
    }
}