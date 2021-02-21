const scrollWrapper = document.querySelector('.page-content');
const mq = window.matchMedia("(min-width: 600px)");

if (mq.matches) {
    (function () {
        function scrollHorizontally(e) {
            e = window.event || e;
            var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
            scrollWrapper.scrollLeft -= (delta * 10); // Multiplied by 40
            e.preventDefault();
        }
        if (scrollWrapper.addEventListener) {
            // IE9, Chrome, Safari, Opera
            scrollWrapper.addEventListener("mousewheel", scrollHorizontally, false);
            // Firefox
            scrollWrapper.addEventListener("DOMMouseScroll", scrollHorizontally, false);
        } else {
            // IE 6/7/8
            scrollWrapper.attachEvent("onmousewheel", scrollHorizontally);
        }
    })();
}


