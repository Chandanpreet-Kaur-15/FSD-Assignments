// Script for hamburger menu start
const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
//  Once we click on the menu item of ha,burger, the menu bar closes
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

}))
// Script for hamburger menu end

// Script for parallax effect start
let right = document.getElementById('right');
let left = document.getElementById('left');
window.addEventListener('scroll', () => {

    let value = window.scrollY;
    right.style.marginRight = value * -1.5 + 'px';
    left.style.marginLeft = value * -1.5 + 'px';
})
// Script for parallax effect end

// Script for about pages start
var tablinks = document.getElementsByClassName("about-pages");
var tabcontents = document.getElementsByClassName("about-pages-content");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-page-content");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-page");
    }
    event.currentTarget.classList.add("active-page-content");
    document.getElementById(tabname).classList.add("active-page");
}
// Script for about pages end
