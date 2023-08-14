const swiperAirMax = new Swiper('.air-max-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 12,

    // Navigation arrows
    navigation: {
        nextEl: '.air-max-next',
        prevEl: '.air-max-prev',
    },
});

const swiperGearUpMen = new Swiper('.gear-up-shop-men-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 12,

    // Navigation arrows
    navigation: {
        nextEl: '.gear-up-men-next',
        prevEl: '.gear-up-men-prev',
    },
})

const swiperGearUpWomen = new Swiper('.gear-up-shop-women-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 12,

    // Navigation arrows
    navigation: {
        nextEl: '.gear-up-women-next',
        prevEl: '.gear-up-women-prev',
    },
})

const swiperControllers = document.querySelectorAll(".swiper-controller")

swiperControllers.forEach((controller) => {
    controller.addEventListener("click", () => {
        swiperControllers.forEach((innerController) => {
            if(innerController.classList.contains("swiper-button-disabled")){
                if(innerController.classList.contains("swiper-button-prev")){
                    const leftArrow = innerController.firstChild

                    leftArrow.src = "images/home%20page/left-inactive-arrow.svg"
                    leftArrow.style.transform = "scaleX(1)"
                }
                else{
                    const rightArrow = innerController.firstChild

                    rightArrow.src = "images/home%20page/left-inactive-arrow.svg"
                    rightArrow.style.transform = "scaleX(-1)"
                }
            }
            else{
                if(innerController.classList.contains("swiper-button-prev")){
                    const leftArrow = innerController.firstChild

                    leftArrow.src = "images/home%20page/right-active-arrow.svg"
                    leftArrow.style.transform = "scaleX(-1)"
                }
                else{
                    const rightArrow = innerController.firstChild

                    rightArrow.src = "images/home%20page/right-active-arrow.svg"
                    rightArrow.style.transform = "scaleX(1)"
                }
            }
        })
    })
})

