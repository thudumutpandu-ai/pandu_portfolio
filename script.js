
// 1. MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });
});


// 2. TYPING ANIMATION

const typing = document.getElementById("typing");

const words = [
    "Web Developer",
    "Python Developer",
    "Creative Coder"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    typing.textContent =
        currentWord.substring(0, charIndex);

    if (!deleting && charIndex < currentWord.length) {

        charIndex++;

        setTimeout(typeEffect, 100);

    } else if (deleting && charIndex > 0) {

        charIndex--;

        setTimeout(typeEffect, 50);

    } else {

        deleting = !deleting;

        if (!deleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, 800);
    }
}

typeEffect();


// 3. SCROLL REVEAL ANIMATION

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});


// 4. 3D MOUSE TILT EFFECT

const profileCard = document.getElementById("profileCard");

if (window.matchMedia("(pointer: fine)").matches) {

    document.addEventListener("mousemove", (event) => {

        const rect = profileCard.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        if (
            event.clientX >= rect.left - 100 &&
            event.clientX <= rect.right + 100 &&
            event.clientY >= rect.top - 100 &&
            event.clientY <= rect.bottom + 100
        ) {

            profileCard.style.transform =
                `rotateY(${x * 15}deg) rotateX(${-y * 15}deg)`;

        } else {

            profileCard.style.transform =
                "rotateY(0deg) rotateX(0deg)";
        }

    });
}


// 5. AUTOMATIC YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();

