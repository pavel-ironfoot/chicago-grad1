/// Tabs
const tabsBtns = document.querySelectorAll(".tabs__nav button");

const tabsItems = document.querySelectorAll(".tabs__item");

function hideTabs() {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("active"));
}

function showTab(index) {
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}))

// Anchors
const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach(anc => {
    anc.addEventListener("click", function (e) {
        e.preventDefault();
        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);
        // elem.offsetTop it is a total amoun of piksels from the top of the window

        window.scroll({
            top: elem.offsetTop,
            behavior: 'smooth'
        });
    })
});
////////////////////////////////

const learnMore = document.querySelector('a[href="#learn"]');
console.log(learnMore);
learnMore.addEventListener("click", (e) => {
    e.preventDefault();
    const elem = document.querySelector("#learn");

    window.scroll({
        top: elem.offsetTop - 65,
        behavior: 'smooth'
    });
});