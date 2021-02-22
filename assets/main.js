console.log("main working")

const artworksBtn = document.querySelector('.artworks-title')
const artworkList = document.querySelector('.hide-nav')

artworksBtn.addEventListener('click', () => {
    console.log("clicked")
    artworkList.classList.toggle("show-nav")
})