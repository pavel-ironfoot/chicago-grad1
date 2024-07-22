const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contentToShow = document.querySelectorAll(".content");
let intervalSlider;
let count = 0;

let flag = true;

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
    
    if(flag){
        contentToShow[manual].classList.add("active");
    }

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
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

////////////////////////////
const navigationContacts = document.querySelector('.navigation__contact');
const navigationAbout = document.querySelector('.navigation__about');
const contactsContent = document.querySelector('.contacts');
const aboutContent = document.querySelector('.about');


function switchNavigation(navigationButtonTitle){
    contentToShow.forEach(i => {
            i.classList.remove("active");
    });
    flag=false;

    switch (navigationButtonTitle) {
        case 'contacts':
            contactsContent.classList.add("active");
            aboutContent.classList.remove("active");
          break;
        case 'about':
            aboutContent.classList.add("active");
            contactsContent.classList.remove("active");
          break;
        default:
      }
}

navigationContacts.addEventListener('click',()=>{
    switchNavigation('contacts');
})

navigationAbout.addEventListener('click',()=>{
    switchNavigation('about');
})