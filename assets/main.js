console.log("build-1")

const artworksBtn = document.querySelector('.artworks-title')
const artworkList = document.querySelector('.hide-nav')

artworksBtn.addEventListener('click', () => {
    console.log("clicked")
    artworkList.classList.toggle("show-nav")
})






// const images = document.querySelectorAll(".rollover-image")
const images = document.querySelectorAll('.link-container')
console.log(images)

function elementInViewport(el) {
    const windowWidth = window.innerWidth
    console.log(windowWidth)
    const elementScroll = el.getBoundingClientRect().right
    // const elementScroll = el.getBoundingClientRect().right - windowWidth
    console.log(elementScroll)
    const offSet = 60
    return elementScroll < (offSet * -1)
}
console.log(elementInViewport())
console.log(elementScroll)

document.addEventListener("scroll", () => {
    images.forEach((i) => {
        if (elementInViewport(i)) {
            i.classList.add('inView')
        } else {
            i.classList.remove('inView')
        }
    })
})