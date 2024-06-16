const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contentToShow = document.querySelectorAll(".content");
let intervalSlider;
let count = 0;

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
        clearInterval(intervalSlider);
        handleBtn(i);
        count = i;
        startAutoSlider();
    })
});

function startAutoSlider() {
    intervalSlider = setInterval(() => {
        count++;
        if (count >= btns.length) {
            count = 0;
        }
        handleBtn(count);
    }, 8000);
}

startAutoSlider();
