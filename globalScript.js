// Csillagok száma
const numStars = 100;

const starsContainer = document.querySelector('.stars');

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;

    starsContainer.appendChild(star);
}

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}