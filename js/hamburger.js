const HAMBURGER = document.querySelector(".nav__hamburger-wrap");
const SPAN = document.querySelectorAll(".nav__hamburger");
const NAV_ACTIVE = document.querySelector(".nav__link-wrap");
// const NAV = document.querySelector(".nav");

HAMBURGER.addEventListener("click", function () {
	// animasi hamburger
	SPAN[0].classList.toggle("nav__hamburger1--clicked");
	SPAN[1].classList.toggle("nav__hamburger2--clicked");
	SPAN[2].classList.toggle("nav__hamburger3--clicked");
	// NAV.style.boxShadow = "none";

	// activate nav__lists
	NAV_ACTIVE.classList.toggle("active");
});

// console.log(SPAN);
