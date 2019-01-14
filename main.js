let menuButton = document.querySelector("#menu-button");
let closeButton = document.querySelector("#close-button");
let width = window.innerWidth;

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