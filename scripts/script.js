// Menu burger
var sidenav = document.getElementById("sidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
    sidenav.classList.add("active");
}

function closeNav() {
    sidenav.classList.remove("active");
}

// Title animation
var slider = document.getElementById("slider");
const title = document.getElementById("title");

slider.addEventListener("scroll", () => {
    //console.log(slider.scrollTop);
    if (slider.scrollTop == 787) {
        title.textContent = "Présentation";
    } else if (slider.scrollTop == 1574) {
        title.textContent = "Projets";
    } else if (slider.scrollTop == 0 || slider.scrollTop == 1732) {
        title.textContent = "Mchl.";
    }
});

// Slider image & description
const itemsI = document.querySelectorAll(".slider-projet__img__item");
const itemsD = document.querySelectorAll(".slider-projet__description__item");
const nbItemsI = itemsI.length;
const nbItemsD = itemsD.length;
const next = document.querySelector(".right");
const prev = document.querySelector(".left");
let count = 0;

function nextItem() {
    itemsI[count].classList.remove("active");
    itemsD[count].classList.remove("active");
    if ((count < nbItemsI - 1) && (count < nbItemsD - 1)) {
        count++;
    } else {
        count = 0;
    }
    itemsI[count].classList.add("active");
    itemsD[count].classList.add("active");
    console.log(count);
}

next.addEventListener("click", nextItem);

function prevItem() {
    itemsI[count].classList.remove("active");
    itemsD[count].classList.remove("active");
    if (count > 0) {
        count--;
    } else {
        count = nbItemsI - 1;
        count = nbItemsD - 1;
    }
    itemsI[count].classList.add("active");
    itemsD[count].classList.add("active");
}

prev.addEventListener("click", prevItem);