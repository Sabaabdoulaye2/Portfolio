const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-item");
const navItemHome = document.querySelector("#home-link");
const navItemCompetence = document.querySelector("#competence-link");
const navItemContacts = document.querySelector("#contacts-link");
const navItemAutobiography = document.querySelector("#biography-link");

hamburger.addEventListener("click", mobileMenu);
navItems.forEach((n) => n.addEventListener("click", mobileMenu));
navItems.forEach((n) => n.addEventListener("click", closeMenu));
navItems.forEach((n) => n.addEventListener("click", updateNavLink));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function updateNavLink() {
  navItems.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
}

// Text animation
var string = "Developpeur web à votre service!";
var str = string.split("");
var el = document.getElementById("Typewriter1");
function animate(className, textToAnimate) {
  str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(running);
  var running = setTimeout(animate, 90);
}
animate();

$(".toggle-features").click(function () {
  $(".features").slideToggle();
});
