// const scrollWrapper = document.getElementById('content-wrapper');

// const pageType = document.querySelector('.home');
// console.log(pageType)

// if (mq.matches) {
//     (function () {
//         function scrollHorizontally(e) {
//             e = window.event || e;
//             var delta = Math.max(-1.5, Math.min(1.5, (e.wheelDelta || -e.detail)));
//             scrollWrapper.scrollLeft -= (delta * 10); // Multiplied by 40
//             e.preventDefault();
//         }
//         if (scrollWrapper.addEventListener) {
//             // IE9, Chrome, Safari, Opera
//             scrollWrapper.addEventListener("wheel", scrollHorizontally, false);
//             // Firefox
//             scrollWrapper.addEventListener("DOMMouseScroll", scrollHorizontally, false);
//         } else {
//             // IE 6/7/8
//             scrollWrapper.attachEvent("onwheel", scrollHorizontally);
//         }
//     })();
// }


// import * as HorizontalScroll from '@oberon-amsterdam/horizontal';
// new HorizontalScroll({ container: scrollWrapper });


    // /* We define our function 🕹 */
    // function replaceVerticalScrollByHorizontal(event) {
    // 	if (event.deltaY != 0) {
    //   	// manually scroll horizonally instead
    //     const scrollWrapper = document.querySelector('.split-wrapper__right')
    //     scrollWrapper.scroll(window.scrollX + event.deltaY * 5, window.scrollY);
        
    //     // prevent vertical scroll
    //     // console.log("event", event)
    //   	// event.preventDefault();
    //   }
    //   return;
    // }

    // /* Listener on window once we start scrolling, we run our function 💨 */
    // window.addEventListener('wheel', replaceVerticalScrollByHorizontal, {passive: true});


    const mq = window.matchMedia('(min-width: 700px)');
    const scrollContainer = document.querySelector(".split-wrapper__right");

if(mq.matches) {
  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  })
}