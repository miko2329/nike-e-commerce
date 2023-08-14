let header = document.querySelector(".header")
let headerOffsetTop = header.offsetTop

function makeStickyHeader() {
    if(window.scrollY > headerOffsetTop) header.classList.add("sticky")
    else header.classList.remove("sticky")
}

window.addEventListener("scroll", makeStickyHeader)