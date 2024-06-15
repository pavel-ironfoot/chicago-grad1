const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contentToShow = document.querySelectorAll(".content");

function handleBtn(manual) {
    contentToShow.forEach(i => {
        if (i !== manual) {
            i.classList.remove("active");
        }
    });

    btns.forEach(i => {
        if (i !== manual) {
            i.classList.remove("active");
        }
    });

    slides.forEach(i => {
        if (i !== manual) {
            i.classList.remove("active");
        }
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contentToShow[manual].classList.add("active");
}

btns.forEach((button, i) => {
    button.addEventListener("click", () => {
        handleBtn(i)
    })
});