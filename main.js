let menuButton = document.querySelector("#menu-button");
let closeButton = document.querySelector("#close-button");
let width = window.innerWidth;
let menuLinks = document.querySelectorAll(".menu-links");

menuButton.addEventListener("click", ()=> {
    if (width > 1000) {
        document.querySelector("#side-menu").style.width = "20%";
    }
    else {
        document.querySelector("#side-menu").style.width = "60%";
    }
    closeButton.style.display = "block";
});

closeButton.addEventListener("click", ()=> {
    document.querySelector("#side-menu").style.width = "0";
    closeButton.style.display = "none";
})

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", ()=> {
        document.querySelector("#side-menu").style.width = "0";
        closeButton.style.display = "none";
    })
}

let currentScroll = document.documentElement.scrollTop;
let arrow = document.querySelector("#up-arrow");

window.onscroll = function () {
    arrow.display = "none";
    currentScroll = document.documentElement.scrollTop;
    if (currentScroll < 400) {
        arrow.style.display = "none";
    }
    else if (currentScroll > 400) {
        arrow.style.display = "block";
    }
};
